import React from "react";

const AllCategories = ({ categories, activeId }) => {
  return (
    <aside className="col-span-3">
      <h2 className="text-2xl font-bold text-[#403F3F] mb-6">All Category</h2>

      <div className="space-y-2">
        {categories?.news_category?.map((category) => {
          const isActive = activeId === category.category_id;

          return (
            <button
              key={category.category_id}
              type="button"
              className={`w-full text-left px-6 py-4 rounded-md transition-all duration-200
                ${
                  isActive
                    ? "bg-[#E7E7E7] text-[#D72050] font-semibold"
                    : "text-[#706F6F] hover:bg-[#F3F3F3] hover:text-[#D72050]"
                }`}
            >
              {category.category_name}
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default AllCategories;
