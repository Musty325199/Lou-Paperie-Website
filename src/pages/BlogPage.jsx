import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../assets/assets"; // Assuming you have a list of blogs in assets

const BlogPage = () => {
  const recentBlogs = blogs.slice(0, 3);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);

  // Handle view increment
  const handleViewIncrease = () => {
    setViews(views + 1);
  };

  // Handle like increment
  const handleLikeIncrease = () => {
    setLikes(likes + 1);
  };

  const { id } = useParams(); // Get the blog ID from the URL

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <div className="max-w-5xl border border-black  font-roboto my-10 md:mx-auto mx-5 px-5 py-10">
        <p className="text-gray-600">Admin {blog.date} . 2 min read</p>
        <h1 className="md:text-4xl text-2xl font-bold">{blog.name}</h1>
        <img src={blog.image} alt={blog.name} className="w-full mt-5" />
        <div className="mt-10">
          <p className="md:text-lg text-justify">{blog.desc}</p>
        </div>
        <hr className="my-5 bg-black h-0.5" />
        <div className="text-[12px] flex justify-between px-5 pb-5">
          <div className="flex gap-10 justify-between">
            <button onClick={handleViewIncrease} className="text-gray-500">
              Views: <span className="font-bold">{views}</span>
            </button>
            <p>comments</p>
          </div>
          <button onClick={handleLikeIncrease} className="text-gray-500">
            Likes: <span className="font-bold">{likes}</span>
          </button>
        </div>
      </div>
      <div className="max-w-5xl font-raleway my-10 md:mx-auto mx-5  px-5 py-10">
        <div className="flex justify-between pr-7">
        <h1 className="text-xl">Recent Posts</h1>
        <Link to='/blog' className="underline">See All</Link>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 my-5">
          {recentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="w-full md:w-[18rem] border border-black"
            >
              <img src={blog.image} alt={blog.name} />
              <h3 className="m-5">{blog.name}</h3>
              <hr className="my-5 bg-black h-0.5" />
              <div className="text-[12px] flex justify-between px-5 pb-5">
                <div className="flex gap-10 justify-between">
                  <button className="text-gray-500">
                    Views: <span className="font-bold">1</span>
                  </button>
                  <p>comments</p>
                </div>
                <button className="text-gray-500">
                  Likes: <span className="font-bold">1</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
