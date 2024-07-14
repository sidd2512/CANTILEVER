// src/components/CategoryButtons.jsx
import React, { useState } from "react";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const CategoryButtons = ({ setcategory }) => {
  const [activeCategory, setActiveCategory] = useState("");
  const handle = (category) => {
    setcategory(category);
    setActiveCategory(category);
  };

  return (
    <div className="flex justify-start space-x-4 my-4  ">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handle(category)}
          className={`bg-transparent hover:bg-orange-300 text-black-700 dark:text-white/80 font-semibold hover:text-white py-2 px-4 border  border-black    dark:border-white hover:border-transparent rounded-xl ${
            activeCategory === category
              ? "border-orange-500 dark:border-orange-500"
              : ""
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
