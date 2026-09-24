import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, List, Sparkles } from "lucide-react";
import { BlogDetail } from "@/components/blog/blog-detail";
import { bestPosRetailBlog } from "@/content/pages/blogs/best-pos-system-for-retail";
import { allBlogsData } from "@/content/pages/allBlogsData";
import { insightsData } from "@/content/pages/insightsData";
import { BlogFaqEnhancer } from "@/components/blog/blog-faq-enhancer";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(allBlogsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "best-pos-system-for-retail") {
    return {
      title: bestPosRetailBlog.meta.title,
      description: bestPosRetailBlog.meta.description,
      alternates: { canonical: `/blog/${slug}` },
    };
  }

  const post = allBlogsData[slug];
  if (!post) return { title: "Not Found" };

  return {
    title: slug === "what-is-pos" ? "What’s a POS system? What does POS mean & How to use POS" : `${post.title} - Hulm Insights`,
    description: post.excerpt || post.title,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || post.title,
      url: `/blog/${slug}`,
      images: post.imageUrl ? [{ url: post.imageUrl }] : undefined,
      publishedTime: post.publishedTime,
      modifiedTime: post.modifiedTime,
    },
  };
}

export default async function SingleInsightPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "best-pos-system-for-retail") {
    return <BlogDetail />;
  }

  const post = allBlogsData[slug];

  if (!post) {
    notFound();
  }

  const metaItem = insightsData.find((p) => p.slug === slug);
  const category = metaItem?.category || "POS Strategy";
  const readTime = metaItem?.readTime || "6 min read";
  const authorName = post.author || metaItem?.author || "Hulm Editorial Team";
  const authorSlug = "hulm-solutions-editorial-team";
  const dateStr = post.date || metaItem?.date || "2025";
  const hasToc = post.tocItems && post.tocItems.length > 0;
  const articleHtml = post.contentHtml
    .replace(
      /href="https:\/\/hulmsolutions\.com\/(?!wp-content\/)/g,
      'href="/'
    )
    .replace(
      /href="\/pos-case-studies\/laptop-store-pos-system-karachi\/?"/g,
      'href="/pos-case-studies/implementing-a-pos-system-for-retail-the-laptop-store"'
    )
    .replace(/href="\/industries\/restaurant\/?"/g, 'href="/industries/restaurant-pos"')
    .replace(/href="(\/[^"#?]+)\/"/g, 'href="$1"');

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://hulmsolutions.com").replace(/\/$/, "");
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/blog/${slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.imageUrl || undefined,
    datePublished: post.publishedTime,
    dateModified: post.modifiedTime || post.publishedTime,
    author: {
      "@type": "Organization",
      name: authorName,
      url: `${siteUrl}/author/${authorSlug}`,
    },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: `${siteUrl}/blog/${slug}/`,
  };
  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  // Filter 3 related articles
  const relatedPosts = insightsData
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p) => ({ title: p.title, slug: p.slug }));

  return (
    <div className="flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }}
        />
      )}
      <article className="py-12 md:py-20">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumbs */}
          <nav className="text-xs text-zinc-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-zinc-900 transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-zinc-600 truncate max-w-xs sm:max-w-md">{post.title}</span>
          </nav>

          {/* 2-Column Minimalist Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column: Sticky Sidebar (TOC + Trial Card) */}
            <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {hasToc && (
                <div className="bg-[#FAFAFA] border border-[#EBECEF] rounded-[22px] p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2 mb-3.5 pb-2.5 border-b border-[#EBECEF]/80">
                    <p className="text-[16px] font-bold tracking-[0.1em] text-black uppercase">
                      Table of Contents
                    </p>
                  </div>
                  <nav className="max-h-[58vh] overflow-y-auto toc-scrollbar pr-3 space-y-2.5 text-[13.5px]">
                    {post.tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="group flex items-start gap-2 text-[#475467] hover:text-[#152825] transition-all duration-150 leading-[1.5] py-0.5 rounded-md"
                      >
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-[#25a18e] transition-colors shrink-0" />
                        <span className="group-hover:text-[#25a18e] transition-colors">
                          {item.title}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Attractive Minimalist Trial Card */}
              <div className="bg-gradient-to-b from-white to-[#F8FAFB] border border-[#EBECEF] rounded-[20px] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="w-9 h-9 rounded-xl bg-[#25a18e]/10 text-[#25a18e] flex items-center justify-center font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#152825] mb-1.5 leading-snug">
                  Modern POS for Retailers
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mb-5">
                  Automate checkout, real-time inventory, and tax compliance with Hulm.
                </p>
                <Button asChild size="sm" className="w-full bg-[#152825] hover:bg-[#25a18e] text-white text-xs font-semibold h-10 rounded-xl shadow-sm transition-colors">
                  <Link href="https://app.hulmsolutions.com/Register">Start Free 14-Day Trial</Link>
                </Button>
              </div>
            </aside>

            {/* Right Column: Main Article Body */}
            <main className={`${hasToc ? 'lg:col-span-8' : 'lg:col-span-12 max-w-4xl mx-auto'} min-w-0`}>
              <Link href="/blogs" className="inline-flex items-center text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors mb-6">
                <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to all articles
              </Link>

              {/* Category Tag */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#25a18e]/10 text-[#25a18e]">
                  {category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#152825] mb-6 leading-[1.22]">
                {post.title}
              </h1>

              {/* Metadata Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-zinc-500 border-t border-b border-zinc-100 py-4 mb-8">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#EBECEF] bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <img
                      src="/images/author/hulm-editorial-team.png"
                      alt={authorName}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <span>By</span>
                  <Link href={`/author/${authorSlug}`} className="font-semibold text-zinc-900 hover:text-[#25a18e] transition-colors">
                    {authorName}
                  </Link>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{dateStr}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              {post.imageUrl && (
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-zinc-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] mb-8 bg-zinc-50">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Mobile Table of Contents */}
              {hasToc && (
                <details className="lg:hidden bg-[#FAFAFA] border border-[#EBECEF] rounded-[20px] p-5 mb-8 text-sm [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between font-bold text-[#152825] cursor-pointer select-none">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#8C93A3] font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25a18e]" /> Table of Contents
                    </span>
                    <span className="text-zinc-400 text-xs font-normal">Tap to expand</span>
                  </summary>
                  <nav className="max-h-[45vh] overflow-y-auto toc-scrollbar pr-2 space-y-2.5 mt-4 pt-3 border-t border-zinc-200/60 text-[13.5px]">
                    {post.tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="group flex items-start gap-2 text-[#475467] hover:text-[#25a18e] py-1 transition-colors leading-snug"
                      >
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-zinc-300 group-hover:bg-[#25a18e] transition-colors shrink-0" />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </nav>
                </details>
              )}

              {/* Complete Article Content with Clean Editorial Typography */}
              <div
                className="blog-content mb-16"
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              />
              <BlogFaqEnhancer />

              {/* Minimalist Bottom Upgrade Banner */}
              <div className="p-8 sm:p-10 rounded-[20px] bg-[#152825] text-white text-center mb-16 shadow-[0_4px_25px_rgba(21,40,37,0.08)]">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Upgrade Your Business with Hulm POS</h3>
                <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
                  Designed for speed, simplicity, and multi-location scalability. Start ringing up sales in minutes.
                </p>
                <Button asChild size="sm" className="bg-[#25a18e] hover:bg-[#208b7a] text-white font-semibold px-6 rounded-xl text-xs h-10 shadow-sm transition-colors">
                  <Link href="https://app.hulmsolutions.com/Register">Start Your Free Trial</Link>
                </Button>
              </div>

              {/* Related Articles */}
              <div className="border-t border-zinc-100 pt-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-6">
                  Related Articles
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedPosts.map((rPost, idx) => (
                    <Link
                      key={idx}
                      href={`/blog/${rPost.slug}`}
                      className="p-5 rounded-[16px] border border-[#EBECEF] hover:border-[#25a18e] transition-all flex flex-col justify-between group bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                    >
                      <h4 className="text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-[#25a18e] transition-colors mb-3 line-clamp-2 leading-snug">
                        {rPost.title}
                      </h4>
                      <span className="text-[11px] font-medium text-[#25a18e] inline-flex items-center gap-1">
                        Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </main>
          </div>
        </Container>
      </article>
    </div>
  );
}
