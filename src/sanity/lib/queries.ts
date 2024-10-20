// ./src/sanity/lib/queries.ts

import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
    _id, 
    title, 
    description,
    slug, 
    mainImage, 
    _createdAt, 
    "categories": categories[]->{title, slug},
    "author": author->{name, image, slug}, // Fetch author details
    body // Fetch body content
  }`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  ...,
  author->,
  categories[]->
}`);