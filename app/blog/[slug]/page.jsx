import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from '@portabletext/react'
import readingTime from "reading-time";
import Head from 'next/head';

export const revalidate = 10;

async function getData(slug) {
  const query = `*[_type == 'blog' && slug.current == '${slug}']{
    'currentSlug':slug.current,
      title,
      content,
      titleImage,
      smallDescription
  }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

function extractTextFromPortableText(content) {
  return content
    .map((block) => {
    if (block.children) {
      return block.children.map((child) => child.text).join(" ");
    }
    return block.text;
  })
  .join(" ");
}

export async function generateMetadata({ params }) {
  const blog = await getData(params.slug);
  const title = blog.title;
  
  const description = blog.smallDescription;
  const imageURL = urlFor(blog.titleImage).width(1200).height(630).url(); // Set width and height
  return {
    title: title,
    description: description,
    openGraph: {
      images: [
        {
          url: imageURL,
          width: 1200, 
          height: 630, 
        },
      ],
    },
  };
}

export default async function BlogArticle({ params }) {
  const data = await getData(params.slug);
  const textForReadingTime = extractTextFromPortableText(data.content);

  function truncateDescription(description, maxLength) {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  }

  // Invoke the truncateDescription function with the actual parameters
  const truncatedDescription = truncateDescription(data.smallDescription, 200);

  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={truncatedDescription} />

        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={truncatedDescription} />
        <meta property="og:image" content={urlFor(data.titleImage).url()} />
        <meta property="og:url" content={`https://mozisha.com/blog/${data.currentSlug}`} />
        <meta property="og:type" content="article" />
      </Head>

     
    <h1 className=" text-3xl block  font-bold leading-8 tracking-tight sm:text-4xl text-center my-8">
      {data.title}
      </h1>
      <p className="border shadow-sm bg-gray-100 text-gray-400 p-1 w-fit text-[10px] font-bold text-center mx-auto">
        {textForReadingTime
          ? readingTime(textForReadingTime).text
          : "Reading time not available"}
      </p>
    <Image
    src={urlFor(data.titleImage).url()}
    alt="image"
    width={800}
    height={800}
    priority
    className="rounded-md border  mt-8  mx-auto object-cover"
      />{" "}
    <div className=" mt-16  mx-auto prose prose-lg px-4  prose-a:underline  prose-blue  leading-8 mb-16 max-w-4xl" >
        <PortableText value={data.content}  />
    </div>
    </>
      
  );
}
