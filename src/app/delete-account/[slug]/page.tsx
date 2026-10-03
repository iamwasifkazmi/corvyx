import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAppPrivacyPolicy } from "@/lib/app-privacy";
import { getProduct } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const accountApps = ["monvyn", "moveup-gym"] as const;

type Params = { slug: string };

export function generateStaticParams() {
  return accountApps.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `Delete ${product.name} account`,
    description: `How to delete your ${product.name} account and associated data.`,
    path: `/delete-account/${slug}`,
  });
}

export default async function DeleteAccountPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  if (!accountApps.includes(slug as (typeof accountApps)[number])) {
    notFound();
  }

  const product = getProduct(slug);
  const policy = getAppPrivacyPolicy(slug);
  if (!product || !policy?.dataDeletion) notFound();

  const deletion = policy.dataDeletion;

  return (
    <div className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
      <p className="text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
        {product.name} · Account deletion
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-[-0.02em] text-ink sm:text-5xl">
        Delete your {product.name} account
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted">
        {deletion.intro}
      </p>

      <section className="mt-10 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
          Delete in the app
        </h2>
        {deletion.steps && (
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] text-ink-soft">
            {deletion.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        )}
        {deletion.options && (
          <ul className="mt-6 space-y-4">
            {deletion.options.map((option) => (
              <li
                key={option.title}
                className="rounded-xl border border-line bg-mist/40 p-4"
              >
                <p className="font-medium text-ink">{option.title}</p>
                <p className="mt-1 text-sm text-muted">{option.desc}</p>
              </li>
            ))}
          </ul>
        )}
        {deletion.note && (
          <p className="mt-4 text-sm text-muted">{deletion.note}</p>
        )}
      </section>

      <section className="mt-8 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
          Request deletion by email
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
          If you cannot access the app, email{" "}
          <a className="text-accent" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>{" "}
          from the address linked to your account with the subject line{" "}
          <strong className="text-ink">{deletion.emailSubject}</strong>. We will
          verify ownership and delete your account within 30 days.
        </p>
      </section>

      <section className="mt-8 text-sm text-muted">
        <p>
          Full details:{" "}
          <Link
            href={`/privacy/${slug}#account-deletion`}
            className="font-medium text-accent hover:underline"
          >
            {product.name} Privacy Policy
          </Link>
          {" · "}
          <Link
            href={`/products/${slug}`}
            className="font-medium text-accent hover:underline"
          >
            Product page
          </Link>
        </p>
      </section>
    </div>
  );
}
