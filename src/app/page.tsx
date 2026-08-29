import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PhoneMock, ProductShowcaseCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  const pdfPocket = products.find((p) => p.slug === "pdf-pocket")!;
  const oneSnap = products.find((p) => p.slug === "onesnap")!;
  const moveUpGym = products.find((p) => p.slug === "moveup-gym")!;

  return (
    <>
      <section className="hero-stage relative overflow-x-clip pt-14">
        {/* Decorative sparks */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <span className="spark absolute top-[22%] left-[8%] h-2 w-2 rounded-full bg-cyan" />
          <span className="spark absolute top-[30%] right-[12%] h-1.5 w-1.5 rounded-full bg-purple [animation-delay:0.8s]" />
          <span className="spark absolute bottom-[28%] left-[18%] h-1.5 w-1.5 rounded-full bg-blue [animation-delay:1.4s]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:py-14">
          <div className="relative z-10">
            <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3 py-1.5 backdrop-blur-md">
              <Logo size={28} priority />
              <span className="text-[11px] font-medium tracking-[0.14em] text-purple uppercase">
                Mobile apps · AI & classic
              </span>
            </div>

            <p className="reveal reveal-delay-1 mt-5 font-display brand-text text-[clamp(3.2rem,9.5vw,6.2rem)] leading-[0.9] tracking-[-0.03em]">
              {siteConfig.name}
            </p>
            <div className="reveal reveal-delay-1 shimmer-line mt-4 h-[3px] w-24 rounded-full" />

            <h1 className="reveal reveal-delay-2 mt-5 max-w-md text-[1.15rem] leading-snug text-ink-soft sm:text-xl">
              Elegant apps that make everyday life easier.
            </h1>
            <p className="reveal reveal-delay-3 mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-[15px]">
              Documents, photos, video, and fitness — crafted for clarity, privacy,
              and calm speed.
            </p>

            <div className="reveal reveal-delay-4 mt-7 flex flex-wrap gap-2.5">
              <Link
                href="/products"
                className="btn-brand px-5 py-3 text-sm font-medium"
              >
                Explore products
              </Link>
              <Link
                href="/about"
                className="btn-ghost px-5 py-3 text-sm font-medium text-ink"
              >
                About us
              </Link>
            </div>

            <div className="reveal reveal-delay-4 mt-7 flex flex-wrap gap-2">
              {products.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pr-3 pl-1 text-xs text-ink-soft transition hover:border-purple/30 hover:text-ink"
                >
                  <Image
                    src={p.icon}
                    alt=""
                    width={22}
                    height={22}
                    className="rounded-md"
                  />
                  {p.shortName}
                </Link>
              ))}
            </div>
          </div>

          {/* Delightful phone stage */}
          <div className="reveal reveal-delay-2 relative mx-auto h-[380px] w-full max-w-[540px] sm:h-[440px] lg:h-[460px] lg:max-w-none">
            <div
              className="absolute inset-x-[8%] bottom-[6%] h-[42%] rounded-[50%] bg-gradient-to-t from-purple/15 via-cyan/10 to-transparent blur-2xl"
              aria-hidden
            />

            {/* OneSnap — left */}
            <div className="float-a absolute top-[16%] left-[0%] z-[1] w-[36%] max-w-[170px] sm:left-[2%]">
              <PhoneMock
                src={oneSnap.cover}
                alt={`${oneSnap.shortName} preview`}
                className="!w-full drop-shadow-xl"
              />
            </div>

            {/* PDF Pocket — center */}
            <div className="float-b absolute top-[10%] left-1/2 z-[3] w-[44%] max-w-[220px] -translate-x-1/2 sm:top-[6%]">
              <PhoneMock
                src={pdfPocket.cover}
                alt={`${pdfPocket.shortName} preview`}
                priority
                className="!w-full drop-shadow-2xl"
              />
            </div>

            {/* MoveUp Gym — top right */}
            <div className="float-c absolute top-0 right-[0%] z-[2] w-[38%] max-w-[180px] sm:right-[1%]">
              <PhoneMock
                src={moveUpGym.cover}
                alt={`${moveUpGym.shortName} fitness app`}
                className="!w-full drop-shadow-xl"
              />
              <p className="mt-1.5 text-center text-[10px] font-semibold tracking-[0.12em] text-purple uppercase">
                MoveUp · Fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/60 px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] text-purple uppercase">
                Products
              </p>
              <h2 className="font-display mt-2 text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
                See what we ship.
              </h2>
            </div>
            <Link
              href="/products"
              className="shrink-0 text-sm font-medium text-purple hover:underline"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductShowcaseCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-2xl border border-line bg-mist/40 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-[11px] font-medium tracking-[0.18em] text-cyan uppercase">
              Why Corvyx
            </p>
            <h2 className="font-display mt-2 text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
              Quiet tools with a clear job.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[15px]">
              Classic on-device apps and thoughtful AI — designed to feel light,
              focused, and ready for real days.
            </p>
            <Link
              href="/about"
              className="btn-brand mt-6 inline-flex px-5 py-2.5 text-sm font-medium"
            >
              Learn about us
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="rounded-xl border border-line bg-surface p-4 transition hover:border-purple/25"
              >
                <Image
                  src={p.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-lg"
                />
                <p className="mt-3 text-sm font-medium text-ink">{p.shortName}</p>
                <p className="mt-0.5 text-xs text-muted">{p.category}</p>
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-xl border border-line bg-surface p-4 transition hover:border-purple/25"
            >
              <Logo size={36} />
              <p className="mt-3 text-sm font-medium text-ink">Contact</p>
              <p className="mt-0.5 text-xs text-muted">hello@corvyx.co</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
