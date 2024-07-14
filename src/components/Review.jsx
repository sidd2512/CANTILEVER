import React, { useState } from "react";
import reviewsData from "../reviewsData";
import ReviewForm from "./ReviewForm";

const ReviewBox = () => {
  const [reviews, setReviews] = useState(reviewsData);

  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };
  return (
    <div className="container mx-auto p-4">
      <div className="">
        <ReviewForm addReview={addReview} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviewsData.map((review, index) => (
          <div key={index} className="p-4 rounded-lg shadow-md ">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-800">
                {review.author.charAt(0)}
              </div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold dark:text-white">
                  {review.author}
                </h2>
                <p className="text-sm text-gray-600 dark:text-white/60">
                  {review.date}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white/80">
              {review.title}
            </h3>
            <p className="text-gray-700 dark:text-white/70">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewBox;
