import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl min-h-screen">
      <Link href="/projects" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary font-heading tracking-widest uppercase mb-12">
        <ArrowLeft size={16} /> Back to Projects
      </Link>
      <h1 className="text-4xl md:text-6xl font-heading uppercase mb-8">Project: {resolvedParams.id}</h1>
      <div className="aspect-video bg-surface-dark border border-border-dark rounded-xl mb-12 flex items-center justify-center">
        <span className="text-text-subtle font-heading text-2xl uppercase">Project Asset</span>
      </div>
      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-text-muted leading-relaxed">
          Detailed case study content for {resolvedParams.id} goes here. 
        </p>
      </div>
    </div>
  );
}
