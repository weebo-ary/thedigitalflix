import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const truncateText = (text = "", wordLimit) => {
    return text.split(" ").slice(0, wordLimit).join(" ") + " ...";
  };
  

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      {/* Image with Zoom Effect */}
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover transform hover:scale-110 transition duration-300"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-2">{blog.title || "Untitled Blog"}</h2>
        <p className="text-gray-800 dark:text-gray-400 text-sm">{truncateText(blog.description, 52)}</p>

        {/* Read More Button */}
        <Link to={`/blogs/${blog.id}`}>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition duration-300">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error loading blogs:", error));
  }, []);

  return (
    <div className="mx-auto p-6 mb-8">
      <h1 className="text-3xl font-bold text-black dark:text-white text-center mb-8">Latest Blogs</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
