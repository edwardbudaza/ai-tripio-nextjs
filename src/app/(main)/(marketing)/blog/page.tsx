// ./src/app/(blog)/page.tsx

import { Posts } from "../_components/Posts";
import { sanityFetch } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const posts = await sanityFetch({
    query: POSTS_QUERY,
  });

  return <Posts posts={posts} />;
}