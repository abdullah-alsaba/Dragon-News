import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa";

const NoNews = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white py-20 px-6 text-center shadow-sm">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
        <FaRegNewspaper className="text-4xl text-[#D72050]" />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-[#403F3F]">No News Found</h2>

      <p className="mt-3 max-w-md text-[#706F6F] leading-7">
        Sorry! There are no news articles available in this category at the
        moment. Please choose another category or return to the homepage.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-md bg-[#D72050] px-8 py-3 font-semibold text-white transition hover:bg-[#b71c45]"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NoNews;
