import { notFound } from "next/navigation";
import {
  AppPrivacyPolicyPage,
  appPrivacyPolicies,
  buildAppPrivacyMetadata,
  getAppPrivacyPolicy,
} from "@/lib/app-privacy";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return appPrivacyPolicies.map((policy) => ({ slug: policy.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const policy = getAppPrivacyPolicy(slug);
  if (!policy) return {};
  return buildAppPrivacyMetadata(policy);
}

export default async function AppPrivacyPage({ params }: Props) {
  const { slug } = await params;
  const policy = getAppPrivacyPolicy(slug);
  if (!policy) notFound();
  return <AppPrivacyPolicyPage policy={policy} />;
}
