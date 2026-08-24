import Link from "next/link";

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full flex justify-center">
      <div className="mx-auto max-w-[700px] w-full px-4 pt-6">
        <ol className="flex items-center gap-1.5 text-footnote text-text-secondary">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-text-tertiary">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded">
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-primary" aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
