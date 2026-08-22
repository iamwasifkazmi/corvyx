import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name} websites and mobile applications.`,
  path: "/terms",
});

const updated = "August 22, 2026";

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
      <p className="text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
        Legal
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-[-0.02em] text-ink sm:text-6xl">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            1. Agreement
          </h2>
          <p className="mt-3">
            By accessing {siteConfig.url} or using {siteConfig.name} apps
            (including PDF Pocket, OneSnap: Photo Editor, and OneCut: Video Editor
            &amp; Maker), you agree to these Terms of Service. If you do not
            agree, do not use our services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            2. Our services
          </h2>
          <p className="mt-3">
            Corvyx provides websites and mobile applications intended to help with
            productivity and creative tasks. Features may change over time as we
            improve products. Some capabilities may be free; others may require
            purchase or subscription as described in-app or on store listings.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            3. Acceptable use
          </h2>
          <p className="mt-3">You agree not to misuse our services, including by:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Attempting to disrupt, reverse engineer, or unlawfully access our systems.</li>
            <li>Using the apps to infringe others’ rights or violate applicable laws.</li>
            <li>Uploading or processing content you do not have rights to use.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            4. Your content
          </h2>
          <p className="mt-3">
            You retain rights to the documents, photos, videos, and other content
            you process with our apps. You are responsible for that content and for
            backing up important files.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            5. Intellectual property
          </h2>
          <p className="mt-3">
            The Corvyx name, branding, website, and app software are owned by us
            or our licensors. These Terms do not grant you rights to our trademarks
            or source code beyond the limited license to use the products as
            intended.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            6. Disclaimers
          </h2>
          <p className="mt-3">
            Services are provided “as is” and “as available.” To the fullest extent
            permitted by law, we disclaim warranties of merchantability, fitness
            for a particular purpose, and non-infringement. We do not guarantee
            uninterrupted or error-free operation.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            7. Limitation of liability
          </h2>
          <p className="mt-3">
            To the fullest extent permitted by law, {siteConfig.name} will not be
            liable for indirect, incidental, special, consequential, or punitive
            damages, or any loss of data, profits, or business arising from your
            use of the services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            8. Changes
          </h2>
          <p className="mt-3">
            We may update these Terms. Continued use after changes become
            effective constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            9. Contact
          </h2>
          <p className="mt-3">
            Questions about these Terms:{" "}
            <a className="text-accent" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
