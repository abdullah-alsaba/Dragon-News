import React from "react";

const AllCategories = ({ categories }) => {
  

  return (
    <div className="col-span-3">
      <h1 className="font-bold text-3xl mb-7">All Category</h1>

      <div className="ml-6 font-medium space-y-4">
        {categories?.news_category?.map((category) => (
          <h2
            key={category.category_id}
            className="cursor-pointer hover:text-red-500 transition"
          >
            {category.category_name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
