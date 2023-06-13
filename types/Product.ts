import { PortableTextBlock } from "sanity";

export type Product = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    images: string[];
    details: PortableTextBlock[]
}