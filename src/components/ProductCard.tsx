import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { StoreButtons } from "@/components/StoreButtons";

type PhoneMockProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PhoneMock({ src, alt, className = "", priority }: PhoneMockProps) {
  return (
    <div className={`relative mx-auto w-[min(100%,280px)] ${className}`}>
      <div className="rounded-[1.85rem] border border-white/20 bg-ink p-[8px] shadow-[0_24px_50px_rgba(12,18,32,0.2)]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.4rem] bg-mist">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="280px"
            priority={priority}
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}

export function ProductShowcaseCard({ product }: { product: Product }) {
  const available = Boolean(product.appStoreUrl || product.playStoreUrl);

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-purple/25 hover:shadow-[0_20px_40px_rgba(12,18,32,0.08)]">
      <Link
        href={`/products/${product.slug}`}
        className="relative flex items-end justify-center px-5 pt-6 pb-5"
        style={{
          background: `linear-gradient(160deg, ${product.accentSoft} 0%, #ffffff 72%)`,
        }}
      >
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Image
            src={product.icon}
            alt=""
            width={30}
            height={30}
            className="rounded-lg shadow-sm"
          />
          <span className="text-[10px] font-medium tracking-[0.12em] text-ink-soft uppercase">
            {product.category}
            {available ? " · Live" : ""}
          </span>
        </div>
        <div className="relative mt-5 w-[52%] max-w-[170px] transition duration-500 group-hover:-translate-y-1">
          <div className="rounded-[1.35rem] border border-black/10 bg-ink p-[6px] shadow-lg">
            <div className="relative aspect-[9/19] overflow-hidden rounded-[1.05rem]">
              <Image
                src={product.cover}
                alt={`${product.shortName} preview`}
                fill
                sizes="170px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-1 flex-col border-t border-line px-5 py-5">
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-display text-xl tracking-[-0.02em] text-ink">
            {product.shortName}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted">
            {product.tagline}
          </p>
        </Link>
        {available ? (
          <StoreButtons
            appStoreUrl={product.appStoreUrl}
            playStoreUrl={product.playStoreUrl}
            className="mt-4"
          />
        ) : (
          <Link
            href={`/products/${product.slug}`}
            className="mt-4 text-sm font-medium text-purple"
          >
            View product →
          </Link>
        )}
      </div>
    </div>
  );
}
