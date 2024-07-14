import React, { useState } from "react";

const ReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      title,
      content,
      author,
      date: new Date().toISOString().split("T")[0],
    };
    addReview(newReview);
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4  rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-semibold mb-2 dark:text-white">
        Write a Review
      </h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 mb-2 dark:text-white/70"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full p-2 border border-gray-100 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 dark:text-white/70 mb-2"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          id="content"
          className="w-full p-2 border border-gray-300 rounded"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 mb-2 dark:text-white/70"
          htmlFor="author"
        >
          Author
        </label>
        <input
          type="text"
          id="author"
          className="w-full p-2 border border-gray-300 rounded"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-orange-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
