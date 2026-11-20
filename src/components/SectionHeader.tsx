type Props = {
  id?: string;
  children: React.ReactNode;
};

/** Small-caps section label with a thin divider filling the rest of the row. */
export function SectionHeader({ id, children }: Props) {
  return (
    <div className="flex items-center gap-3">
      <h2
        id={id}
        className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-muted"
      >
        {children}
      </h2>
      <div aria-hidden="true" className="h-px flex-1 bg-border" />
    </div>
  );
}
