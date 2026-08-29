import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "MoveUp Gym Privacy Policy",
  description:
    "Privacy Policy for MoveUp Gym — how we collect, use, and protect your fitness data.",
  path: "/privacy/moveup-gym",
});

const updated = "August 29, 2026";

const deleteSteps = [
  "Open MoveUp Gym and sign in to your account.",
  "Tap Profile in the bottom navigation bar (person icon).",
  "Scroll down past Settings to the Privacy & data section.",
  "Choose one of the following:",
];

const deleteOptions = [
  {
    title: "Delete all data",
    desc: "Clears workout history, stats, streaks, favorites, and challenge progress. Your account stays active.",
  },
  {
    title: "Delete account",
    desc: "Permanently removes your account and all associated data from our servers.",
  },
];

export default function MoveUpGymPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-28 pb-20 sm:px-8 sm:pt-36">
      <p className="text-[11px] font-medium tracking-[0.18em] text-accent uppercase">
        MoveUp Gym · Legal
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
            “our”) collects, uses, and protects information when you use{" "}
            <strong className="text-ink">MoveUp Gym</strong>, our mobile fitness
            application. MoveUp Gym is published by {siteConfig.name} and is
            available at{" "}
            <Link href="/products/moveup-gym" className="text-accent hover:underline">
              corvyx.co/products/moveup-gym
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            2. Information we collect
          </h2>
          <p className="mt-3">Depending on how you use MoveUp Gym, we may process:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Account details you provide (such as name, email, and password) when
              you create an account or sign in.
            </li>
            <li>
              Fitness profile data you enter during onboarding — fitness level,
              goals, body stats, equipment, workout preferences, and focus areas.
            </li>
            <li>
              Workout activity, including completed sessions, streaks, achievements,
              and progress history.
            </li>
            <li>
              Device and diagnostics data needed to keep the app stable (for example
              crash reports, if enabled).
            </li>
            <li>
              Advertising identifiers where ads are shown, in accordance with your
              device settings and applicable consent requirements.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            3. How we use information
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>To provide workouts, programs, challenges, and progress tracking.</li>
            <li>To personalize recommendations based on your profile and equipment.</li>
            <li>To maintain your account and sync your fitness data across sessions.</li>
            <li>To respond to support requests and improve app reliability.</li>
            <li>To comply with legal obligations where applicable.</li>
          </ul>
        </section>

        <section id="account-deletion">
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            4. Account & data deletion
          </h2>
          <p className="mt-3">
            You can delete your workout data or permanently delete your MoveUp Gym
            account directly inside the app. No email request is required for in-app
            deletion.
          </p>

          <h3 className="mt-6 font-medium text-ink">How to delete in the app</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5">
            {deleteSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <ul className="mt-4 space-y-4 pl-5">
            {deleteOptions.map((option) => (
              <li key={option.title} className="list-none">
                <p className="font-medium text-ink">{option.title}</p>
                <p className="mt-1">{option.desc}</p>
              </li>
            ))}
          </ul>

          <p className="mt-4">
            Confirm your choice in the dialog that appears. Deletion is permanent
            and cannot be undone.
          </p>

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

          <h3 className="mt-8 font-medium text-ink">Request deletion by email</h3>
          <p className="mt-3">
            If you cannot access the app, email us at{" "}
            <a className="text-accent" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            from the address linked to your account with the subject line{" "}
            <strong className="text-ink">MoveUp Gym account deletion</strong>. We
            will verify ownership and delete your account within 30 days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            5. Sharing
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
            6. Children’s privacy
          </h2>
          <p className="mt-3">
            MoveUp Gym is not directed to children under 13, and we do not knowingly
            collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            7. Changes
          </h2>
          <p className="mt-3">
            We may update this policy from time to time. The “Last updated” date at
            the top will reflect material changes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl text-ink" style={{ fontWeight: 700 }}>
            8. Contact
          </h2>
          <p className="mt-3">
            Privacy questions about MoveUp Gym:{" "}
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
