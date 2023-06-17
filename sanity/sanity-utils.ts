import { Page } from "@/types/Page";
import { Product } from "@/types/Product";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProducts(): Promise<Product[]> {

  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "images": images[].asset->url,
        details,
        price
    }`
  );
}

export async function getProduct(slug: string): Promise<Product> {
  
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "images": images[].asset->url,
        details,
        price
    }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current
  }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`,
    { slug }
  );
}
