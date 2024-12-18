// ./src/components/Posts.tsx

import { urlFor } from "@/sanity/lib/image";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import ClientSideRoute from "./ClientSideRoute";
import { ROUTES } from "@/constants/routes";

type Props = {
  posts: Post[];
}

export function BlogList({ posts }: Props) {
  return (

    <div className="container mx-auto max-w-6xl ">
      <hr className="border-[#F7AB0A] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`${ROUTES.blog}/post/${post.slug.current}`}>
              <div className="flex flex-col group cursor-pointer">
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-in-out">
                  <Image 
                    className="object-cover object-left lg:object-center"
                    src={urlFor(post.mainImage).url()}
                    alt={"post.author.name"}
                    fill
                  />
                  <div className="absolute bottom-0 w-full bg-opacity-20
                  bg-black background-blur-lg rounded drop-shadow-lg text-white 
                  p-5 flex justify-between">
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

                    <div className="flex flex-col md:flex-row gap-y-2
                    md:gap-x-2 items-center">
                      {post.categories.map(category => (
                        <div key={category._id} className="bg-[#FDC82B] text-center text-black
                        px-3 py-1 rounded-full text-xs font-semibold">
                          <p>{category.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex-1">
                  <p className="underline text-lg font-bold">{post.title}</p>
                  <p className="text-gray-500 line-clamp-2">{post.description}</p>
                </div>

                <p className="flex mt-5 font-bold items-center group-hover:underline">
                  Read Post
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </p>
              </div>
            </ClientSideRoute>
        ))}
                
      </div>
    </div>
    
  );
}