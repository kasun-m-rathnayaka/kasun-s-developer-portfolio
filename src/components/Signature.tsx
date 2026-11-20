/** Script-font signature, used only in the footer. */
export function Signature({ children }: { children: React.ReactNode }) {
  return (
    <p aria-label={String(children)} className="font-script text-4xl leading-none">
      <span aria-hidden="true">{children}</span>
    </p>
  );
}
