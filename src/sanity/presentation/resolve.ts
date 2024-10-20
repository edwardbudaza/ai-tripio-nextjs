// ./src/sanity/presentation/resolve.ts

import { ROUTES } from "@/constants/routes";
import {
  defineLocations,
  PresentationPluginOptions,
} from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    // Add more locations for other post types
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `${ROUTES.blog}/post/${doc?.slug}`,
          },
          { title: "Home", href: `${ROUTES.blog}` },
        ],
      }),
    }),
  },
};