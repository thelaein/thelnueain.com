import { notFound } from "next/navigation";
import { PROJECTS, getNextProject, getProject } from "@/lib/data";
import { CaseSections } from "@/components/sections/CaseSections";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) return { title: "Case Study — Thel Nu" };
  return {
    title: `${project.name} — Thel Nu`,
    description: project.short,
    openGraph: {
      title: `${project.name} — Thel Nu`,
      description: project.short,
      url: `https://thelnueain.com/case/${id}`,
      images: [{ url: `/case/${id}/opengraph-image`, width: 1200, height: 630, alt: project.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Thel Nu`,
      description: project.short,
      images: [`/case/${id}/opengraph-image`],
    },
    alternates: { canonical: `/case/${id}` },
  };
}

export default async function CasePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();
  const next = getNextProject(id)!;

  return <CaseSections project={project} next={next} />;
}
