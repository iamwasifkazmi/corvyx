import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SoftwareAppJsonLd } from "@/components/JsonLd";
import { PhoneMock } from "@/components/ProductCard";
import { StoreButtons } from "@/components/StoreButtons";
import { getProduct, products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: product.name,
    description: product.description,
    path: `/products/${product.slug}`,
    image: product.cover,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <SoftwareAppJsonLd slug={product.slug} />
      <article>
        <div
          className="border-b border-line"
          style={{
            background: `linear-gradient(180deg, ${product.accentSoft} 0%, transparent 100%)`,
          }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pt-20 pb-12 sm:px-8 sm:pt-28 sm:pb-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Link
                href="/products"
                className="text-sm text-muted transition hover:text-ink"
              >
                ← All products
              </Link>
              <div className="mt-8 flex items-center gap-3">
                <Image
                  src={product.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="rounded-2xl shadow-md"
                />
                <p className="text-[11px] font-medium tracking-[0.16em] text-purple uppercase">
                  {product.category}
                  {" · "}
                  {product.ai ? "AI-assisted" : "Classic tools"}
                </p>
              </div>
              <h1 className="font-display mt-5 text-4xl tracking-[-0.02em] text-ink sm:text-6xl">
                {product.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                {product.tagline}
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
                {product.description}
              </p>
              <StoreButtons
                appStoreUrl={product.appStoreUrl}
                playStoreUrl={product.playStoreUrl}
                className="mt-8"
              />
              {product.privacyPolicyUrl && (
                <p className="mt-4 text-sm text-muted">
                  <Link
                    href={product.privacyPolicyUrl}
                    className="text-purple hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </p>
              )}
              <div className="mt-5 flex flex-wrap gap-2">
                {product.platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-md border border-line bg-surface px-3 py-1 text-xs text-muted"
                  >
                    {p}
                  </span>
                ))}
                {(product.appStoreUrl || product.playStoreUrl) && (
                  <span className="rounded-md border border-line bg-surface px-3 py-1 text-xs text-muted">
                    Available now
                  </span>
                )}
              </div>
            </div>

            <PhoneMock
              src={product.cover}
              alt={`${product.shortName} screenshot`}
              priority
              className="!w-[260px] sm:!w-[300px]"
            />
          </div>
          <div className="h-[2px] w-full brand-gradient" aria-hidden />
        </div>

        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
          {product.featureGraphic && (
            <div className="mb-12">
              <h2 className="font-display text-3xl tracking-[-0.02em] text-ink">
                Feature graphic
              </h2>
              <div className="relative mt-6 aspect-[1024/500] max-w-4xl overflow-hidden rounded-2xl border border-line shadow-md">
                <Image
                  src={product.featureGraphic}
                  alt={`${product.shortName} feature graphic`}
                  fill
                  sizes="(max-width: 896px) 100vw, 896px"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <h2 className="font-display text-3xl tracking-[-0.02em] text-ink">
            Screenshots
          </h2>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-4">
            {product.gallery.map((shot) => (
              <figure key={shot.src} className="w-[200px] shrink-0 sm:w-[220px]">
                <div className="rounded-[1.5rem] border border-line bg-ink p-[8px] shadow-md">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[1.15rem]">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                {shot.label && (
                  <figcaption className="mt-3 text-center text-xs tracking-wide text-muted uppercase">
                    {shot.label}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-3xl tracking-[-0.02em] text-ink">
                Features
              </h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {product.features.map((feature) => (
                  <div key={feature.title} className="py-6">
                    <h3 className="font-medium text-ink">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-2xl border border-line bg-surface/70 p-6 sm:p-8">
              <p className="text-[11px] font-medium tracking-[0.16em] text-ink uppercase">
                Highlights
              </p>
              <ul className="mt-5 space-y-4">
                {product.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: product.accent }}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-line pt-6">
                <p className="text-sm text-muted">
                  Built by{" "}
                  <Link href="/" className="text-purple hover:underline">
                    {siteConfig.name}
                  </Link>
                  .
                </p>
                <Link
                  href="/contact"
                  className="btn-brand mt-5 inline-flex px-5 py-2.5 text-sm font-medium"
                >
                  Contact support
                </Link>
                {product.privacyPolicyUrl && (
                  <p className="mt-4 text-sm text-muted">
                    <Link
                      href={product.privacyPolicyUrl}
                      className="text-purple hover:underline"
                    >
                      Privacy Policy →
                    </Link>
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
