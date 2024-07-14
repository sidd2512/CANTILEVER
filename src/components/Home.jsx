import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { NewsApi } from "../NewsApi";

const Home = () => {
  const [articles, setArticles] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const newsArticles = await NewsApi("general", "in");
        setArticles(newsArticles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchArticles();
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center fixed flex-col ">
      <h1 className="text-[2.5rem] text-center text-black/70 dark:text-white/80  ">
        We provide Latest News
      </h1>
      <NavLink
        to="/latest-news"
        className="text-black hover:text-orange-500 dark:text-orange-200 dark:hover:text-orange-500 text-[3rem]"
      >
        Click To Read Latest News
      </NavLink>
      <div className="ml-5 mt-10 h-1/2 flex  gap-3">
        {error && <p>Error: {error}</p>}
        <div className="flex flex-col gap-4 ">
          <p className="text-[2rem] dark:text-black/50 ">NEWS</p>
          {articles.map((article, index) => (
            <div key={index} className="w-full ">
              {" "}
              <a
                href={article.url}
                className="text-[1.1rem] text-black/80 hover:cursor-pointer hover:text-orange-500 dark:text-white/80 dark:hover:text-orange-500 "
                target="_blank"
              >
                {article.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
