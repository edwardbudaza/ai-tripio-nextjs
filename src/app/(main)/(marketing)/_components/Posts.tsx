// ./src/components/Posts.tsx

import Image from "next/image";
import { POSTS_QUERYResult } from "../../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

export function Posts({ posts }: { posts: POSTS_QUERYResult }) {
  return (

    <div>
      <hr className="border-[#F7AB0A] mb-10" />

      <div>
        {/* Posts */}
        {posts.map((post) => (
          <div key={post._id} className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image 
                className="object-cover object-left lg:object-center"
                src={urlFor(post?.mainImage?.asset?._ref).url()} 
                alt="Blog Image"
                fill
                          
              />
              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black
              backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{post.title}</p>
                  <p>
                    {new Date(post._createdAt).toLocaleDateString
                    ("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post.categories?.map((category) => (
                    <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // <ul className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
    //   {posts.map((post) => (
    //     <li key={post._id}>
    //       <a
    //         className="block p-4 hover:bg-blue-50"
    //         href={`/blog/posts/${post?.slug?.current}`}
    //       >
    //         {post?.title}
    //       </a>
    //     </li>
    //   ))}
    // </ul>
  );
}