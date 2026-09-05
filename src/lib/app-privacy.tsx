import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export type AppPrivacyPolicy = {
  slug: string;
  appName: string;
  description: string;
  productPath: string;
  informationCollected: string[];
  howWeUse: string[];
  onDeviceNote?: string;
  /** Explicit retention practices — required by Google Play User Data policy */
  dataRetention: {
    intro: string;
    items: string[];
  };
  dataDeletion?: {
    intro: string;
    steps?: string[];
    options?: { title: string; desc: string }[];
    note?: string;
    emailSubject: string;
  };
};

export const appPrivacyPolicies: AppPrivacyPolicy[] = [
  {
    slug: "pdf-pocket",
    appName: "PDF Pocket",
    description:
      "Privacy Policy for PDF Pocket — how we handle your documents on-device.",
    productPath: "/products/pdf-pocket",
    informationCollected: [
      "Documents and images you choose to open, edit, scan, or export in the app.",
      "App preferences and tool usage needed to provide PDF features.",
      "Basic device and diagnostics data to keep the app stable (for example crash reports, if enabled).",
      "Optional analytics in aggregated or de-identified form, where implemented.",
    ],
    howWeUse: [
      "To provide PDF tools such as merge, split, compress, convert, edit, and scan.",
      "To process files on your device without uploading them for core operations.",
      "To respond to support requests and improve reliability.",
      "To comply with legal obligations where applicable.",
    ],
    onDeviceNote:
      "PDF Pocket is designed for on-device processing. Common PDF operations run locally on your phone or tablet. We do not upload your documents to our servers for core tooling.",
    dataRetention: {
      intro:
        "PDF Pocket does not store your documents on our servers. Retention is limited to what remains on your device.",
      items: [
        "Documents, scans, and edits you create are retained only on your device until you delete them or uninstall the app.",
        "We do not retain copies of your PDFs or images on Corvyx servers for core PDF tooling.",
        "If you contact us for support, any email you send is retained only as long as needed to resolve your request (typically up to 12 months), then deleted unless a longer period is required by law.",
        "Optional diagnostics or crash reports, if enabled, may be retained by our service providers for a limited period needed to diagnose issues (typically up to 90 days).",
      ],
    },
    dataDeletion: {
      intro:
        "PDF Pocket does not require an account. Your documents and edits stay on your device unless you choose to share or export them.",
      steps: [
        "Open PDF Pocket.",
        "Delete individual files from the Files section, or remove exported outputs from your device gallery or file manager.",
        "To remove all app data, uninstall PDF Pocket from your device settings.",
      ],
      note:
        "Uninstalling the app removes locally stored PDFs, scans, and preferences managed by the app.",
      emailSubject: "PDF Pocket data deletion",
    },
  },
  {
    slug: "onesnap",
    appName: "OneSnap: Photo Editor",
    description:
      "Privacy Policy for OneSnap — how we handle your photos and edits.",
    productPath: "/products/onesnap",
    informationCollected: [
      "Photos and images you import for editing, collages, or export.",
      "Drafts, templates, and edits saved on your device.",
      "Optional app lock PIN or privacy settings you configure.",
      "Basic device and diagnostics data to keep the app stable (for example crash reports, if enabled).",
    ],
    howWeUse: [
      "To provide photo editing, filters, collages, watermarks, and export tools.",
      "To store drafts and private album content locally when you use those features.",
      "To respond to support requests and improve reliability.",
      "To comply with legal obligations where applicable.",
    ],
    onDeviceNote:
      "OneSnap processes your photos on your device. Edits, drafts, and private album items remain local unless you export or share them.",
    dataRetention: {
      intro:
        "OneSnap does not store your photos on our servers. Retention is limited to what remains on your device.",
      items: [
        "Photos, drafts, private album items, and edits are retained only on your device until you delete them or uninstall the app.",
        "We do not retain copies of your photos on Corvyx servers for core editing features.",
        "If you contact us for support, any email you send is retained only as long as needed to resolve your request (typically up to 12 months), then deleted unless a longer period is required by law.",
        "Optional diagnostics or crash reports, if enabled, may be retained by our service providers for a limited period needed to diagnose issues (typically up to 90 days).",
      ],
    },
    dataDeletion: {
      intro:
        "OneSnap does not require an account. You can remove your edits and private content directly in the app or on your device.",
      steps: [
        "Open OneSnap.",
        "Delete drafts or private album photos from within the app.",
        "To remove all app data, uninstall OneSnap from your device settings.",
      ],
      note:
        "Uninstalling the app removes locally stored drafts, edits, and private album content.",
      emailSubject: "OneSnap data deletion",
    },
  },
  {
    slug: "onecut",
    appName: "OneCut: Video Editor & Maker",
    description:
      "Privacy Policy for OneCut — how we handle your videos and projects.",
    productPath: "/products/onecut",
    informationCollected: [
      "Videos and clips you import for editing, trimming, filtering, or export.",
      "Project drafts and export settings saved on your device.",
      "Basic device and diagnostics data to keep the app stable (for example crash reports, if enabled).",
      "Limited data sent to AI-assisted features only when you use those tools, where implemented.",
    ],
    howWeUse: [
      "To provide video editing, trimming, captions, filters, and export tools.",
      "To save project drafts locally on your device.",
      "To power optional AI-assisted enhancements when you choose to use them.",
      "To respond to support requests and improve reliability.",
    ],
    onDeviceNote:
      "OneCut keeps your video projects on your device. Exported videos are saved where you choose — gallery, files, or share sheet.",
    dataRetention: {
      intro:
        "OneCut primarily stores projects on your device. Retention depends on where your content lives.",
      items: [
        "Video projects, drafts, and export settings are retained only on your device until you delete them or uninstall the app.",
        "We do not retain copies of your videos on Corvyx servers for core editing features.",
        "If you use optional AI-assisted features that require network access, any temporary processing data is not retained longer than needed to complete the request.",
        "If you contact us for support, any email you send is retained only as long as needed to resolve your request (typically up to 12 months), then deleted unless a longer period is required by law.",
        "Optional diagnostics or crash reports, if enabled, may be retained by our service providers for a limited period needed to diagnose issues (typically up to 90 days).",
      ],
    },
    dataDeletion: {
      intro:
        "OneCut does not require an account. You can delete projects and exported videos from within the app or your device.",
      steps: [
        "Open OneCut.",
        "Delete individual projects or exported videos from within the app.",
        "To remove all app data, uninstall OneCut from your device settings.",
      ],
      note:
        "Uninstalling the app removes locally stored projects, drafts, and app preferences.",
      emailSubject: "OneCut data deletion",
    },
  },
  {
    slug: "moveup-gym",
    appName: "MoveUp Gym",
    description:
      "Privacy Policy for MoveUp Gym — how we collect, use, and protect your fitness data.",
    productPath: "/products/moveup-gym",
    informationCollected: [
      "Account details you provide (such as name, email, and password) when you create an account or sign in.",
      "Fitness profile data you enter during onboarding — fitness level, goals, body stats, equipment, workout preferences, and focus areas.",
      "Workout activity, including completed sessions, streaks, achievements, and progress history.",
      "Device and diagnostics data needed to keep the app stable (for example crash reports, if enabled).",
      "Advertising identifiers where ads are shown, in accordance with your device settings and applicable consent requirements.",
    ],
    howWeUse: [
      "To provide workouts, programs, challenges, and progress tracking.",
      "To personalize recommendations based on your profile and equipment.",
      "To maintain your account and sync your fitness data across sessions.",
      "To respond to support requests and improve app reliability.",
      "To comply with legal obligations where applicable.",
    ],
    dataRetention: {
      intro:
        "MoveUp Gym stores account and fitness data on our servers so your progress syncs across sessions. We retain data only as long as needed to provide the service, as described below.",
      items: [
        "Account data (name, email, password hash) and fitness profile (level, goals, body stats, equipment, preferences, language) are retained on our servers for as long as your account remains active.",
        "Workout history, streaks, achievements, favorites, challenge progress, and related stats are retained on our servers for as long as your account remains active, or until you use Delete all data in the app.",
        "When you use Delete all data, we permanently delete your workout history and reset stats, streaks, favorites, and challenge progress from our servers. Your account (name and email) remains so you can keep signing in.",
        "When you delete your account (in-app or by email request), we permanently delete your user account and associated workout history from our servers. Deletion is typically completed immediately in-app, or within 30 days for email requests.",
        "Local device data (such as login token, language preference, and onboarding flags stored via device preferences) remains on your device until you log out, clear app data, or uninstall MoveUp Gym.",
        "Advertising partners (for example Google AdMob) may process advertising identifiers according to their own retention policies and your device consent settings. We do not control how long those partners retain identifiers.",
        "Support emails you send us are retained only as long as needed to resolve your request (typically up to 12 months), then deleted unless a longer period is required by law.",
        "We do not keep backup copies of deleted account data longer than needed for secure deletion and disaster recovery (typically no more than 30 days after account deletion), after which they are purged.",
      ],
    },
    dataDeletion: {
      intro:
        "You can delete your workout data or permanently delete your MoveUp Gym account directly inside the app. No email request is required for in-app deletion.",
      steps: [
        "Open MoveUp Gym and sign in to your account.",
        "Tap Profile in the bottom navigation bar (person icon).",
        "Scroll down past Settings to the Privacy & data section.",
        "Choose one of the following:",
      ],
      options: [
        {
          title: "Delete all data",
          desc: "Clears workout history, stats, streaks, favorites, and challenge progress. Your account stays active.",
        },
        {
          title: "Delete account",
          desc: "Permanently removes your account and all associated data from our servers.",
        },
      ],
      note: "Confirm your choice in the dialog that appears. Deletion is permanent and cannot be undone.",
      emailSubject: "MoveUp Gym account deletion",
    },
  },
];

export function getAppPrivacyPolicy(slug: string) {
  return appPrivacyPolicies.find((policy) => policy.slug === slug);
}

export function buildAppPrivacyMetadata(policy: AppPrivacyPolicy): Metadata {
  return buildMetadata({
    title: `${policy.appName} Privacy Policy`,
    description: policy.description,
    path: `/privacy/${policy.slug}`,
  });
}

type AppPrivacyPolicyPageProps = {
  policy: AppPrivacyPolicy;
};

export function AppPrivacyPolicyPage({ policy }: AppPrivacyPolicyPageProps) {
  const updated = "September 5, 2026";
  let section = 0;
  const next = () => {
    section += 1;
    return section;
  };

  return (
    <div className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
      <p className="text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
        {policy.appName} · Legal
      </p>
      <h1 className="font-display mt-4 text-4xl tracking-[-0.02em] text-ink sm:text-6xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>

      <div className="prose-legal mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. Who we are
          </h2>
          <p className="mt-3">
            This Privacy Policy explains how {siteConfig.name} (“we”, “us”, or
            “our”) collects, uses, and protects information when you use{" "}
            <strong className="text-ink">{policy.appName}</strong>.{" "}
            {policy.appName} is published by {siteConfig.name} and is available at{" "}
            <Link href={policy.productPath} className="text-accent hover:underline">
              corvyx.co{policy.productPath}
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. Information we collect
          </h2>
          <p className="mt-3">
            Depending on how you use {policy.appName}, we may process:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {policy.informationCollected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. How we use information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {policy.howWeUse.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {policy.onDeviceNote && (
          <section>
            <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
              {next()}. On-device processing
            </h2>
            <p className="mt-3">{policy.onDeviceNote}</p>
          </section>
        )}

        <section id="data-retention">
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. Data retention
          </h2>
          <p className="mt-3">{policy.dataRetention.intro}</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            {policy.dataRetention.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {policy.dataDeletion && (
          <section id="account-deletion">
            <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
              {next()}. Data &amp; account deletion
            </h2>
            <p className="mt-3">{policy.dataDeletion.intro}</p>

            {policy.dataDeletion.steps && (
              <>
                <h3 className="mt-6 font-medium text-ink">How to delete in the app</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5">
                  {policy.dataDeletion.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </>
            )}

            {policy.dataDeletion.options && (
              <ul className="mt-4 space-y-4 pl-5">
                {policy.dataDeletion.options.map((option) => (
                  <li key={option.title} className="list-none">
                    <p className="font-medium text-ink">{option.title}</p>
                    <p className="mt-1">{option.desc}</p>
                  </li>
                ))}
              </ul>
            )}

            {policy.dataDeletion.note && (
              <p className="mt-4">{policy.dataDeletion.note}</p>
            )}

            {policy.slug === "moveup-gym" && (
              <figure className="mt-8">
                <div className="mx-auto max-w-[280px] overflow-hidden rounded-[1.85rem] border border-line bg-[#FAF9F5] p-3 shadow-lg">
                  <div className="rounded-[1.4rem] border border-black/10 bg-white p-4">
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-[#5E7168] uppercase">
                      Privacy & data
                    </p>
                    <div className="mt-3 space-y-3 rounded-xl border border-[#E7EDE8] bg-white p-3">
                      <div className="flex gap-3 border-b border-[#E7EDE8] pb-3">
                        <span className="text-[#E07A5F]">🗑</span>
                        <div>
                          <p className="text-sm font-semibold text-[#E07A5F]">
                            Delete all data
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#5E7168]">
                            Clears workout history, stats, streaks, favorites, and
                            challenge progress. Your account stays active.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-red-600">👤</span>
                        <div>
                          <p className="text-sm font-semibold text-red-600">
                            Delete account
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#5E7168]">
                            Permanently removes your account and all associated data.
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-center text-[10px] text-[#5E7168]">
                      Profile → Privacy & data
                    </p>
                  </div>
                </div>
                <figcaption className="mt-4 text-center text-sm text-muted">
                  Delete options in MoveUp Gym under{" "}
                  <strong className="text-ink">Profile → Privacy & data</strong>
                </figcaption>
              </figure>
            )}

            <h3 className="mt-8 font-medium text-ink">Request deletion by email</h3>
            <p className="mt-3">
              If you cannot access the app, email us at{" "}
              <a className="text-accent" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>{" "}
              {policy.slug === "moveup-gym"
                ? "from the address linked to your account with the subject line"
                : "with the subject line"}{" "}
              <strong className="text-ink">{policy.dataDeletion.emailSubject}</strong>.
              {policy.slug === "moveup-gym"
                ? " We will verify ownership and delete your account within 30 days."
                : " We will respond within 30 days."}
            </p>
          </section>
        )}

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. Sharing
          </h2>
          <p className="mt-3">
            We do not sell your personal information. We may share limited data with
            service providers who help us operate hosting, analytics, crash reporting,
            or advertising — only as needed to provide those services and under
            appropriate safeguards.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. Children’s privacy
          </h2>
          <p className="mt-3">
            {policy.appName} is not directed to children under 13, and we do not
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. Changes
          </h2>
          <p className="mt-3">
            We may update this policy from time to time. The “Last updated” date at
            the top will reflect material changes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            {next()}. Contact
          </h2>
          <p className="mt-3">
            Privacy questions about {policy.appName}:{" "}
            <a className="text-accent" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
          <p className="mt-3">
            See also our general{" "}
            <Link href="/privacy" className="text-accent hover:underline">
              Corvyx Privacy Policy
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
