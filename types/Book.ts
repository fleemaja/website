import { PortableTextBlock } from "sanity";

export type Book = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    content: PortableTextBlock[];
    excerpt: string;
}