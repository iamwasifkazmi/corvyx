import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 text-center">
      <p className="text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
        404
      </p>
      <h1 className="font-display mt-4 text-4xl text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-muted">
        That link does not exist. Head home or browse products.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="btn-brand px-5 py-2.5 text-sm font-medium"
        >
          Home
        </Link>
        <Link
          href="/products"
          className="border border-line px-5 py-2.5 text-sm font-medium text-ink"
        >
          Products
        </Link>
      </div>
    </div>
  );
}
