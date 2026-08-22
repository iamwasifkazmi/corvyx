import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} websites and mobile applications.`,
  path: "/privacy",
});

const updated = "August 22, 2026";

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

      <div className="prose-legal mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            1. Who we are
          </h2>
          <p className="mt-3">
            This Privacy Policy explains how {siteConfig.name} (“we”, “us”, or
            “our”) collects, uses, and protects information when you visit{" "}
            {siteConfig.url} or use our mobile applications, including PDF Pocket,
            OneSnap: Photo Editor, and OneCut: Video Editor &amp; Maker.
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
            We keep information only as long as needed for the purposes described
            in this policy, unless a longer period is required by law.
          </p>
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
