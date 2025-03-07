import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedBlog = data.find((item) => item.id.toString() === id);
        setBlog(selectedBlog);
      })
      .catch((error) => console.error("Error loading blog:", error));
  }, [id]);

  if (!blog) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-lg mb-6" />
      <h1 className="text-3xl font-bold text-black dark:text-white mb-4 text-center">{blog.title}</h1>
      <p className="text-black dark:text-white whitespace-pre-line">{blog.description}</p>

      {/* Back to Blog List */}
      <div className="mt-6">
        <Link to="/blogs">
          <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition duration-300">
            Back to Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetail;
