import BlogCard from "./BlogCard";
import { getPosts } from "../../../lib/client";

const BlogSection = async () => {
  const posts = await getPosts();
  console.log(posts)
  return (
    <div className="flex flex-col lg:px-24 px-4 bg-blue-100">
      <div className="flex justify-center my-16 ">
        <h1 className="capitalize text-5xl font-semibold">Blogs</h1>
      </div>
      <ul className="flex flex-row flex-wrap justify-evenly space-y-16">
        {posts.map((post) => (
          <li key={post._id} className="first:mt-8 pb-32">
            <BlogCard postData={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSection;