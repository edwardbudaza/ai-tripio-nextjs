import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { PortableText } from '@portabletext/react';
import { defineQuery, groq } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY } from "@/sanity/lib/queries";
import { RichTextComponents } from "../../../_components/RichTextComponents";
import { client } from "@/lib/sanity.client";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 1800 // revalidate this page every 30 minutes

export async function generateStaticParams() {
  const query = groq`*[_type == "post"]{
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
};

async function PostPage({ params: { slug } }: Props) {
  const post = await sanityFetch({
    query: POST_QUERY,
    params: { slug }
  });

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#8759F2] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          {post.mainImage && (
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
              <Image
                className="object-cover object-center mx-auto"
                src={urlFor(post.mainImage).url()}
                alt={post.author?.name || "Author Image"}
                fill
              />
            </div>
          )}

          <section className="p-5 bg-[#8759F2] w-full">
            <div className="flex flex-col md:flex-row gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              {post.author && (
                <div className="flex items-center space-x-2">
                  {post.author.image && (
                    <Image
                      className="rounded-full"
                      src={urlFor(post.author.image).url()}
                      alt={post.author.name || "Author Image"}
                      height={40}
                      width={40}
                    />
                  )}
                  <div className="w-64">
                    <h3 className="text-lg font-bold">{post.author.name}</h3>
                    <div>
                      {/* TODO: Author Bio */}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              {post.description && <h2 className="italic pt-10">{post.description}</h2>}
              {post && (
                <div className="flex items-center justify-end mt-auto space-x-2">
                  {post.categories && post.categories.map((category) => (
                    <p
                      key={category._id}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                    >
                      {category.title}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </section>

      {post.body && (
        <PortableText
          value={post.body}
          components={RichTextComponents}
        />
      )}
    </article>
  );
}

export default PostPage;
