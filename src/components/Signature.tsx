/** Script-font signature, used only in the footer. */
export function Signature({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-script text-4xl leading-none">{children}</p>
  );
}
