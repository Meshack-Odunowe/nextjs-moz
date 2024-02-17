import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import readingTime from "reading-time";
import Head from "next/head";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
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
        <meta
          property="og:url"
          content={`https://mozisha.com/blog/${data.currentSlug}`}
        />
        <meta property="og:type" content="article" />
      </Head>
      <main className=" max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
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
      <article className=" mt-16  overflow-hidden mx-auto prose prose-lg prose-headings:leading-normal prose-a:underline prose-blue px-4     leading-8 mb-16 ">
        <PortableText
          value={data.content}
          className="px-4 prose-blue "
        />
        <p className=" text-red-500 text-sm mt-8">
          Social Share
        </p>
        <div className="flex gap-2 my-8">
          {/* Facebook share button */}
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=https://mozisha.com/blog/${data.currentSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-400 text-white p-4 font-bold hover:bg-purple-700 rounded-full">
            <FaFacebook />
          </Link>

          {/* Twitter share button */}
          <Link
            href={`https://twitter.com/intent/tweet?url=https://mozisha.com/blog/${
              data.currentSlug
            }&text=${encodeURIComponent(data.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-400 text-white p-4 font-bold hover:bg-purple-700 rounded-full">
            <FaXTwitter />
          </Link>

          {/* LinkedIn share button */}
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mozisha.com/blog/${data.currentSlug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-400 text-white p-4 font-bold hover:bg-purple-700 rounded-full">
            <FaLinkedin />
          </Link>

          {/* WhatsApp share button */}
          <Link
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
              data.title +
                " - " +
                "https://mozisha.com/blog/" +
                data.currentSlug
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-400 text-white p-4 font-bold hover:bg-purple-700 rounded-full">
            <FaWhatsapp />
          </Link>

          {/* Instagram share button */}
        </div>
        </article>
        </main>
    </>
  );
}
