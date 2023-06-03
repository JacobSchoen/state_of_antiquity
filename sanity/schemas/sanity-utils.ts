import { Product } from "@/types/Product";
import { createClient, groq } from "next-sanity";

export async function getProducts(): Promise<Product[]> {
  const client = createClient({
    projectId: "3gdrpofi",
    dataset: "production",
    apiVersion: "2023-06-02",
  });

  return client.fetch(
    groq`*[_type == "product"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "images": image[].asset->url,
        content
    }`
  )
}
