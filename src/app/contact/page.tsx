import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} for product support, partnerships, and general inquiries.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
      <p className="text-[11px] font-medium tracking-[0.18em] text-purple uppercase">
        Contact
      </p>
      <h1 className="font-display mt-2 text-4xl tracking-[-0.02em] text-ink sm:text-5xl">
        Let’s talk.
      </h1>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        Support, partnerships, or feedback — we usually reply in a few business
        days.
      </p>

      <div className="mt-8 divide-y divide-line border-y border-line">
        <a
          href={`mailto:${siteConfig.email}`}
          className="block py-5 transition hover:bg-surface/60"
        >
          <p className="text-[10px] tracking-[0.14em] text-muted uppercase">
            General
          </p>
          <p className="mt-1 font-display text-2xl text-ink">
            {siteConfig.email}
          </p>
        </a>
        <a
          href={`mailto:${siteConfig.supportEmail}`}
          className="block py-5 transition hover:bg-surface/60"
        >
          <p className="text-[10px] tracking-[0.14em] text-muted uppercase">
            Support
          </p>
          <p className="mt-1 font-display text-2xl text-ink">
            {siteConfig.supportEmail}
          </p>
        </a>
      </div>
    </div>
  );
}
