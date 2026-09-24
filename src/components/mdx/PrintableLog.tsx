// Wraps the blank forms in a printable article. When the page is printed,
// only this block is shown (see the print rules in globals.css).
export default function PrintableLog({ children }: { children: React.ReactNode }) {
  return <div className="printable-log">{children}</div>;
}
