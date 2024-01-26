import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import HeroSection from '../components/Blog/HeroSection'
import Link from "next/link";
export const revalidate=30
async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
    smallDescription,
      'currentSlug':slug.current,
      titleImage,
    publishedAt,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <HeroSection/>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-16 mx-auto bg-blue-100 py-8 lg:px-16  px-4 lg:mx-auto mt-5 ">
        {data.map((post, index) => (
          <div key={index} className="bg-gray-100 rounded-md p-4">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />{" "}
            <h1 className=" text-lg line-clamp-2 font-bold mt-4">{post.title}</h1>
            <p className=" text-sm line-clamp-3 mt-2 text-gray-600">
              {post.smallDescription}
            </p>
            <p className=" text-red-500 text-sm font-bold mt-4">{Date(post.publishedAt).substring(0, 10)}</p>
            <button className=" bg-purple-700 text-white px-1 py-2 rounded-md mt-4">
              <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
            </button>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
