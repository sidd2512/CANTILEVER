import React, { useEffect, useState } from "react";
import { NewsApi } from "../NewsApi";
import CategoryButtons from "./CategoryButtons";
import NewsBox from "./NewsBox";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setcategory] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const newsArticles = await NewsApi(category || "general", "in");
        setArticles(newsArticles);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, setcategory]);
  //console.log(articles.length);
  return (
    <div className="container mx-auto p-4">
      <div className="sticky h-11">
        <CategoryButtons setcategory={setcategory} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <NewsBox articles={articles} />}
    </div>
  );
};

export default News;
