import type { Metadata } from "next";
import { ProductShowcaseCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Products",
  description:
    "Explore Corvyx apps — PDF Pocket, OneSnap Photo Editor, and OneCut Video Editor with screenshots and features.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
      <div className="max-w-xl">
        <p className="text-[11px] font-medium tracking-[0.18em] text-purple uppercase">
          Products
        </p>
        <h1 className="font-display mt-2 text-4xl tracking-[-0.02em] text-ink sm:text-5xl">
          Apps with real screens, real purpose.
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          PDF Pocket, OneSnap, and OneCut — previews, features, and details.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <ProductShowcaseCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
