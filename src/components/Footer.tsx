import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { legalLinks, navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div>
          <LogoMark size={36} />
          <p className="mt-3 max-w-xs text-sm text-muted">{siteConfig.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="h-px w-full brand-gradient" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-3.5 text-xs text-muted sm:px-8">
        © {year} {siteConfig.legalName}
      </div>
    </footer>
  );
}
