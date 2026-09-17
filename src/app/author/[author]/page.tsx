import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { insightsData } from "@/content/pages/insightsData";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { FinalCta } from "@/components/home/final-cta";

export async function generateStaticParams() {
  const extraSlugs = ["hulm-editorial-team", "hulm-solutions-editorial-team", "hulm-team", "aamir-khan"];
  const uniqueAuthors = Array.from(new Set([...insightsData.map(post => post.authorSlug), ...extraSlugs]));
  return uniqueAuthors.map((authorSlug) => ({
    author: authorSlug,
  }));
}

type AuthorProps = {
  params: Promise<{ author: string }>;
};

export async function generateMetadata({ params }: AuthorProps): Promise<Metadata> {
  const { author } = await params;
  const authorPosts = insightsData.filter((p) => p.authorSlug === author);
  const name = authorPosts[0]?.author || "Hulm Editorial Team";

  return {
    title: `${name} - Hulm Insights`,
    description: `Articles written by ${name}`,
  };
}

export default async function AuthorPage({ params }: AuthorProps) {
  const { author } = await params;
  let authorPosts = insightsData.filter((p) => p.authorSlug === author);

  if (authorPosts.length === 0) {
    authorPosts = insightsData;
  }

  const authorName = authorPosts[0]?.author || "Hulm Editorial Team";

  return (
    <div className="flex flex-col min-h-screen">
      <Section className="pt-20 lg:pt-28 pb-16 bg-background-muted text-center border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-white overflow-hidden flex items-center justify-center mb-6">
              <img 
                src="/images/author/hulm-editorial-team.png" 
                alt={authorName} 
                className="w-16 h-16 object-contain" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#152825] mb-4">
              {authorName}
            </h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Read all {authorPosts.length} insights and articles written by {authorName}.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((insight) => (
              <div key={insight.id} className="group flex flex-col bg-white border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={insight.imageUrl} 
                    alt={insight.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {insight.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-xs text-text-muted">
                    <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {insight.date}</div>
                    <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> {insight.readTime}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#152825] mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <Link href={`/insights/${insight.slug}`} className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors mt-auto">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </div>
  );
}
