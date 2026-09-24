import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import { EDITORIAL_AUTHOR } from "../../../../content/blog/posts";
import { BlogHeader } from "@/components/blog/blog-header";
import { PostGrid } from "@/components/blog/post-grid";

export const metadata: Metadata = {
  title: "Hulm Solutions Editorial Team | Hulm",
  description: "Read all posts by the Hulm Solutions Editorial Team.",
  alternates: { canonical: "/author/hulm-solutions-editorial-team" },
  openGraph: {
    title: "Hulm Solutions Editorial Team | Hulm",
    description: "Read all posts by the Hulm Solutions Editorial Team.",
    type: "profile",
    url: "https://hulmsolutions.com/author/hulm-solutions-editorial-team",
  }
};

export default async function EditorialTeamPage() {
  const allPosts = await getBlogPosts();
  
  // Filter for posts that belong to the editorial team (should be all of them)
  const authorPosts = allPosts.filter(post => post.authorId === EDITORIAL_AUTHOR.id);

  return (
    <div className="bg-white">
      <BlogHeader 
        title={EDITORIAL_AUTHOR.name}
        description="The official editorial team for Hulm Solutions, sharing insights on point of sale systems, retail management, and business operations."
      />
      
      <PostGrid posts={authorPosts} />
    </div>
  );
}
