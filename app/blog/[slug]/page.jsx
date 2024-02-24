import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import readingTime from "reading-time";
import urlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
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
      smallDescription,
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
  const SampleImageComponent = ({value, isInline}) => {
    const {width, height} = getImageDimensions(value)
    return (
      <Image
        width={800}
        height={800}
        src={urlFor()
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',
  
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
  }
  const components = {
    types: {
      image: SampleImageComponent,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
  }
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
      <main className=" max-w-6xl w-full mx-auto px-8 lg:px-0 ">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl mx-auto block  font-bold leading-8 tracking-tight sm:text-4xl text-center my-8 max-w-3xl">
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
        <article className=" mt-16  overflow-hidden mx-auto prose  prose-headings:leading-normal prose-a:underline prose-blue px-4 lg:px-0     leading-8 mb-16 ">
          <PortableText
            value={data.content}
            className=" prose-blue "
            components={components}
          />
        </article>
        <div className="fixed left-0 bottom-1/3 lg:fixed border bg-white shadow-lg shadow-purple-400 rounded-full lg:px-2 lg:left-2 lg:bottom-1/4">
          {" "}
          <div className="flex flex-col gap-2 my-4 px-1">
            {/* Facebook share button */}
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=https://mozisha.com/blog/${data.currentSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" border text-slate-600  text-center mx-auto text-sm  p-1 font-bold hover:bg-purple-200 rounded-full lg:p-4">
              <FaFacebook />
            </Link>

            {/* Twitter share button */}
            <Link
              href={`https://twitter.com/intent/tweet?url=https://mozisha.com/blog/${
                data.currentSlug
              }&text=${encodeURIComponent(data.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border text-slate-600  text-center mx-auto text-sm  p-1 font-bold hover:bg-purple-200 rounded-full lg:p-4">
              <FaXTwitter />
            </Link>

            {/* LinkedIn share button */}
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mozisha.com/blog/${data.currentSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border text-slate-600  text-center mx-auto text-sm  p-1 font-bold hover:bg-purple-200 rounded-full lg:p-4">
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
              className="border text-slate-600  text-center mx-auto text-sm  p-1 font-bold hover:bg-purple-200 rounded-full lg:p-4">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
