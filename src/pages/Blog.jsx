import React from 'react';
import { blogs } from '../assets/assets';
import { FaPassport } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="w-full px-5 flex items-center gap-10 my-10 flex-col" id='blog'>
      <h1 className="text-5xl font-light font-raleway">My Paper Blog</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-10 mx-10 gap-5 font-roboto">
        {blogs.map((blog) => (
          <div key={blog.id} className="border border-black cursor-pointer">
            <img src={blog.image} alt={blog.name} className="w-full" />
            <div className="px-5 flex gap-5 mt-3">
              <div className="rounded-full border border-black flex items-center justify-center h-8 w-8">
                <FaPassport />
              </div>
              <div className="text-[12px]">
                <p>Admin</p>
                <p>{blog.date} . 2 min read</p>
              </div>
            </div>
            <div className="p-5 flex gap-5 flex-col">
              <h3 className="text-3xl font-semibold font-raleway">{blog.name}</h3>
              <p className="text-md line-clamp-3">{blog.desc}</p>
            </div>
            <hr className="px-5 pb-3" />
            <div className="text-[12px] flex justify-between px-5 pb-10">
              <div className="flex gap-10 justify-between">
                <p>views</p>
                <p>comments</p>
              </div>
              <p>likes</p>
            </div>
            <Link to={`/blog-page/${blog.id}`} className="text-blue-500 px-5 pb-5">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
