// src/lib/sanity.preview.ts
"use client";

import definePreview from "next-sanity/preview";
import { projectId, dataset } from "./sanity.client";

function onPublicAccessOnly() {
  throw new Error("Unable to load preview as you're not logged in");
}

if (!projectId || !dataset) {
  throw new Error(
    "Missing projectId or dataset. Check your sanity.json or .env."
  );
}

// Ensure projectId and dataset are strings
if (typeof projectId !== "string" || typeof dataset !== "string") {
  throw new Error("Invalid projectId or dataset. They must be strings.");
}

// export const usePreview = definePreview({
//   projectId,
//   dataset,
//   onPublicAccessOnly,
// });
