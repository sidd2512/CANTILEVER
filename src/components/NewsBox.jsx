// src/components/NewsBox.jsx
import React from "react";

const NewsBox = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* First Column */}
      <div className="lg:col-span-3 flex flex-col space-y-4">
        {articles.slice(0, 2).map((article, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-md">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Article" className="mb-2" />
            )}
            <h2 className="text-xl dark:text-white/80 font-semibold mb-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-white/60 mb-4">
              {article.description || "Description not available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      {/* Second Column */}
      <div className="lg:col-span-6">
        {articles.slice(2, 3).map((article, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-md">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Article" className="mb-2" />
            )}
            <h2 className="text-xl font-semibold dark:text-white/80 mb-2">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4 dark:text-white/60">
              {article.description || "Description not available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>

      {/* Third Column */}
      <div className="lg:col-span-3 flex flex-col space-y-4">
        {articles.slice(3, 5).map((article, index) => (
          <div key={index} className=" p-4 rounded-lg shadow-md">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="Article" className="mb-2" />
            )}
            <h2 className="text-xl font-semibold mb-2 dark:text-white/80">
              {article.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4 dark:text-white/60">
              {article.description || "Description not available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBox;
