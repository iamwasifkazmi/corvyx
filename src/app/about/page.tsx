import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { products } from "@/lib/products";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Corvyx — a company building elegant mobile apps that make everyday life easier.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.18em] text-purple uppercase">
          About
        </p>
        <h1 className="font-display mt-2 text-4xl tracking-[-0.02em] text-ink sm:text-5xl">
          Apps that make life a little lighter.
        </h1>
        <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
          <p>
            <span className="font-medium text-ink">{siteConfig.name}</span> builds
            mobile experiences that remove friction from documents, photos, and
            video.
          </p>
          <p>
            Some apps use AI when it helps. Others stay classic and on-device —
            like PDF Pocket — so your files stay on your phone.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className="rounded-xl border border-line bg-surface p-4 transition hover:border-purple/25"
          >
            <Image
              src={p.icon}
              alt=""
              width={40}
              height={40}
              className="rounded-lg"
            />
            <p className="mt-3 font-display text-xl text-ink">{p.shortName}</p>
            <p className="mt-1 text-sm text-muted line-clamp-2">{p.tagline}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-line bg-mist/50 px-5 py-7 sm:px-8">
        <h2 className="font-display text-2xl text-ink">Get in touch</h2>
        <p className="mt-2 text-sm text-muted">
          Partnerships, press, or product questions.
        </p>
        <Link
          href="/contact"
          className="btn-brand mt-4 inline-flex px-4 py-2.5 text-sm font-medium"
        >
          Contact Corvyx
        </Link>
      </div>
    </div>
  );
}
