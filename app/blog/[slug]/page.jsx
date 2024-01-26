import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from '@portabletext/react'
export const revalidate=30

async function getData(slug) {
  const query = `*[_type == 'blog' && slug.current == '${slug}']{
    'currentSlug':slug.current,
      title,
      content,
      titleImage
  }[0]
  `;
  const data = await client.fetch(query);
  return data;
}
export default async function BlogArticle({ params }) {
  const data = await getData(params.slug);
  console.log(data);
  return (
    <>
    <h1 className=" text-3xl block  font-bold leading-8 tracking-tight sm:text-4xl text-center my-8">
      {data.title}
    </h1>
    <Image
    src={urlFor(data.titleImage).url()}
    alt="image"
    width={800}
    height={800}
    priority
    className="rounded-md border  mt-8  mx-auto object-cover"
      />{" "}
    <div className=" mt-16  mx-auto prose prose-lg px-4  prose-a:underline  prose-blue  leading-8 mb-16" >
        <PortableText value={data.content}  />
    </div>
    </>
      
  );
}
