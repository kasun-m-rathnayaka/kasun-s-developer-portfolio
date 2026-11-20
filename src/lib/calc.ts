/**
 * Tiny arithmetic evaluator for the command palette. A hand-written
 * recursive-descent parser: no `eval`, no `Function`, no variables, no calls.
 *
 * Supports: numbers, + - * / ^ ( ), unary minus, postfix % (n% = n/100)
 * and "N% of M" (e.g. "34% of 567"). Returns null for anything that is not
 * clearly maths or does not give a finite number.
 */

type Token =
  | { t: "num"; v: number }
  | { t: "op"; v: "+" | "-" | "*" | "/" | "^" | "(" | ")" | "%" }
  | { t: "of" };

const MAX_LENGTH = 100;

function tokenize(input: string): Token[] | null {
  const src = input.toLowerCase().replace(/×/g, "*").replace(/÷/g, "/").replace(/,/g, "");
  const tokens: Token[] = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === " ") {
      i++;
    } else if (/[0-9.]/.test(ch)) {
      const m = /^(?:\d+\.?\d*|\.\d+)/.exec(src.slice(i));
      if (!m) return null;
      tokens.push({ t: "num", v: Number(m[0]) });
      i += m[0].length;
    } else if ("+-*/^()%".includes(ch)) {
      tokens.push({ t: "op", v: ch as Extract<Token, { t: "op" }>["v"] });
      i++;
    } else if (src.startsWith("of", i) && !/[a-z]/.test(src[i + 2] ?? "")) {
      tokens.push({ t: "of" });
      i += 2;
    } else {
      return null;
    }
  }
  return tokens;
}

class Parser {
  private pos = 0;
  constructor(private tokens: Token[]) {}

  parse(): number | null {
    const value = this.expr();
    return value !== null && this.pos === this.tokens.length ? value : null;
  }

  private peek() {
    return this.tokens[this.pos];
  }

  private isOp(v: string) {
    const tok = this.peek();
    return tok?.t === "op" && tok.v === v;
  }

  // expr := term (("+" | "-") term)*
  private expr(): number | null {
    let left = this.term();
    while (left !== null && (this.isOp("+") || this.isOp("-"))) {
      const plus = this.isOp("+");
      this.pos++;
      const right = this.term();
      if (right === null) return null;
      left = plus ? left + right : left - right;
    }
    return left;
  }

  // term := unary (("*" | "/") unary)*
  private term(): number | null {
    let left = this.unary();
    while (left !== null && (this.isOp("*") || this.isOp("/"))) {
      const mul = this.isOp("*");
      this.pos++;
      const right = this.unary();
      if (right === null) return null;
      left = mul ? left * right : left / right;
    }
    return left;
  }

  // unary := ("-" | "+") unary | power      (so -2^2 = -(2^2) = -4)
  private unary(): number | null {
    if (this.isOp("-")) {
      this.pos++;
      const v = this.unary();
      return v === null ? null : -v;
    }
    if (this.isOp("+")) {
      this.pos++;
      return this.unary();
    }
    return this.power();
  }

  // power := percent ("^" unary)?           (right-associative; allows 2^-1)
  private power(): number | null {
    const base = this.percent();
    if (base !== null && this.isOp("^")) {
      this.pos++;
      const exp = this.unary();
      return exp === null ? null : Math.pow(base, exp);
    }
    return base;
  }

  // percent := primary ("%" ("of" unary)?)?
  private percent(): number | null {
    let v = this.primary();
    if (v !== null && this.isOp("%")) {
      this.pos++;
      v = v / 100;
      if (this.peek()?.t === "of") {
        this.pos++;
        const base = this.unary();
        return base === null ? null : v * base;
      }
    }
    return v;
  }

  // primary := number | "(" expr ")"
  private primary(): number | null {
    const tok = this.peek();
    if (tok?.t === "num") {
      this.pos++;
      return tok.v;
    }
    if (this.isOp("(")) {
      this.pos++;
      const v = this.expr();
      if (v === null || !this.isOp(")")) return null;
      this.pos++;
      return v;
    }
    return null;
  }
}

/** Evaluates `input`, or returns null if it is not a finite arithmetic expression. */
export function calculate(input: string): number | null {
  const trimmed = input.trim();
  if (!trimmed || trimmed.length > MAX_LENGTH) return null;
  // Must involve at least one operator, so a bare number or word is not "maths".
  if (!/[-+*/^%×÷]|\bof\b/i.test(trimmed.replace(/^[-+]/, ""))) return null;
  const tokens = tokenize(trimmed);
  if (!tokens || tokens.length === 0) return null;
  const result = new Parser(tokens).parse();
  return result !== null && Number.isFinite(result) ? result : null;
}

/** Display form: up to 10 decimals, trimmed, with thousands separators. */
export function formatResult(n: number): string {
  return Number(n.toPrecision(12)).toLocaleString("en-US", { maximumFractionDigits: 10 });
}
