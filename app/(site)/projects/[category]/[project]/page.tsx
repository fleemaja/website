import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { PortableTextComponents } from "../../../portableTextComponents";

type Props = {
    params: { project: string }
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
      <div className="max-w-3xl mx-auto mt-5">
        <div className="mb-5 text-xl">
            <Link href={`/projects/${project.category.slug}`}>
                &#8592; 
                <span className="ml-2 hover:underline underline-offset-8 decoration-blue-500">
                  {project.category.title}
                </span>
            </Link>
        </div>
        <header className="flex items-center justify-between">
            <h1 className="text-gray-700 text-5xl font-extrabold">
                { project.name }
            </h1>
        </header>

        <Image 
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />

        <div className="prose text-lg text-gray-700 mt-5">
            <PortableText value={project.content} components={PortableTextComponents} />
        </div>
      </div>
)}