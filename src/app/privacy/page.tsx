import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { appPrivacyPolicies } from "@/lib/app-privacy";
import { products } from "@/lib/products";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} websites and mobile applications.`,
  path: "/privacy",
});

const updated = "September 5, 2026";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
      <p className="text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
        Legal
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-[-0.02em] text-ink sm:text-6xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>

      <section className="mt-10 rounded-2xl border border-line bg-surface/70 p-6">
        <p className="text-[11px] font-medium tracking-[0.16em] text-purple uppercase">
          App privacy policies
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Each Corvyx app has its own privacy policy with data handling and
          deletion details for store listings.
        </p>
        <ul className="mt-5 space-y-3">
          {products.map((product) => {
            const policy = appPrivacyPolicies.find((p) => p.slug === product.slug);
            if (!policy) return null;

            return (
              <li key={product.slug}>
                <Link
                  href={`/privacy/${product.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 transition hover:border-purple/25"
                >
                  <Image
                    src={product.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="text-sm font-medium text-ink">{product.name}</p>
                    <p className="text-xs text-muted">{policy.description}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="prose-legal mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            1. Who we are
          </h2>
          <p className="mt-3">
            This Privacy Policy explains how {siteConfig.name} (“we”, “us”, or
            “our”) collects, uses, and protects information when you visit{" "}
            {siteConfig.url} or use our mobile applications, including PDF Pocket,
            OneSnap: Photo Editor, OneCut: Video Editor &amp; Maker, and MoveUp Gym.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            2. Information we collect
          </h2>
          <p className="mt-3">Depending on the product and how you use it, we may process:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Contact details you send us (such as your email and message content).</li>
            <li>Basic device and diagnostics data needed to keep apps stable (for example crash reports, if enabled).</li>
            <li>Usage analytics in aggregated or de-identified form, where implemented.</li>
            <li>
              Media and documents you choose to open in our apps. Many features —
              especially in PDF Pocket — are designed to process files on your
              device rather than uploading them for core tooling.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            3. How we use information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To provide, maintain, and improve our websites and apps.</li>
            <li>To respond to support and partnership requests.</li>
            <li>To monitor reliability, security, and performance.</li>
            <li>To comply with legal obligations where applicable.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            4. On-device processing
          </h2>
          <p className="mt-3">
            Certain Corvyx products prioritize local processing. For example, PDF
            Pocket is built so common PDF operations can run on your device. When
            a feature requires network access (such as optional cloud services or
            AI-assisted tools), we will indicate that in the product experience
            where practical.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            5. Sharing
          </h2>
          <p className="mt-3">
            We do not sell your personal information. We may share limited data
            with service providers who help us operate email, hosting, analytics,
            or crash reporting — only as needed to provide those services and
            under appropriate safeguards.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            6. Data retention
          </h2>
          <p className="mt-3">
            We retain information only as long as needed for the purposes described
            in this policy, unless a longer period is required by law. App-specific
            retention details (including how long account and workout data are kept,
            and what happens after deletion) are stated in each app’s privacy policy
            linked above.
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Website contact messages are kept only as long as needed to respond
              (typically up to 12 months).
            </li>
            <li>
              Diagnostics or crash data, if enabled, may be retained by service
              providers for a limited period needed to diagnose issues (typically up
              to 90 days).
            </li>
            <li>
              When you delete an account or clear app data, we remove associated
              personal data from our active systems promptly, and purge backups
              within about 30 days where technically feasible.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            7. Your choices
          </h2>
          <p className="mt-3">
            You can contact us to request access, correction, or deletion of
            personal information we hold about you, subject to applicable law.
            Device permissions (camera, photos, files) can be managed in your
            system settings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            8. Children’s privacy
          </h2>
          <p className="mt-3">
            Our services are not directed to children under 13, and we do not
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            9. Changes
          </h2>
          <p className="mt-3">
            We may update this policy from time to time. The “Last updated” date
            at the top will reflect material changes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            10. Contact
          </h2>
          <p className="mt-3">
            Privacy questions:{" "}
            <a className="text-accent" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
