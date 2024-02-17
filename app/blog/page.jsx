import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import HeroSection from "../components/Blog/HeroSection";
import Link from "next/link";

import { FaAnglesRight } from "react-icons/fa6";
export const revalidate = 10;
async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc){
    title,
    smallDescription,
      'currentSlug':slug.current,
      titleImage,
    publishedAt,
    content,

    categories[]->{
      
      name
    },
    'author': *[_type == 'author' && _id == ^.author._ref][0]{
      _id,
        name,
        'slug':slug.current
      },
      'images': *[_type == "image" && references(^._id)] {
        ...,
        asset->
      }
  }`;
  const data = await client.fetch(query);
  return data;
}
export const metadata = {
  title: "Blog Section",
  description:
    "Welcome to the blog section of Mozisha, your source for the latest updates in the domain of AI, technology, data, business, and beyond. Stay informed with the most recent news and insights shaping the dynamic landscape of innovation and progress.",
};

export default async function Blog() {
  const data = await getData();
  return (
    <div>
      <HeroSection />
      <div className=" flex flex-col mx-auto">
        <h2 className=" text-4xl my-8 text-center font-bold">Blogs </h2>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-16 mx-auto  py-8 lg:px-16  px-4 lg:mx-auto mt-5 ">
        {data.map((post, index) => (
          <div key={index} className="bg-gray-100 shadow-xl rounded-md p-4">
            <div className="image-container  rounded-lg">
              <Image
                src={urlFor(post.titleImage).url()}
                alt="image"
                width={500}
                height={500}
                className="rounded-t-lg h-[200px] object-cover transform hover:scale-110 transition-all duration-300 ease-in-out "
              />{" "}
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="border shadow-sm bg-gray-100 text-gray-400 p-1 text-[10px] font-bold">
                {new Date(post.publishedAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </p>{" "}
           

              <p className="  shadow-md   text-sm bg-gray-100  text-gray-400  font-bold border p-1">
                {" "}
                <span className=" text-[10px]"> Posted By:</span>{" "}
                {post.author.name}
              </p>
            </div>

            <h1 className=" text-lg line-clamp-2 font-bold mt-4">
              {post.title}
            </h1>
            <p className=" text-sm line-clamp-3 mt-2 text-gray-600">
              {post.smallDescription}
            </p>

            <button className="  hover:text-purple-600 text-[14px] px-1 py-2 bg-purple-700 text-white hover:bg-purple-300 rounded-md mt-4">
              <Link
                className="flex justify-center items-center gap-x-4 "
                href={`/blog/${post.currentSlug}`}>
                Read More{" "}
                <span className="hover:translate-x-4 transition-all duration-300 ease-in-out">
                  <FaAnglesRight />
                </span>{" "}
              </Link>
            </button>
            <div className="flex flex-row flex-wrap space-x-2  mt-2">
              {post.categories.map((category) => (
                <p
                  key={category._id}
                  className="border  shadow-md bg-gray-200  py-1 px-2 text-[10px] rounded-full mb-2">
                  {category.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
