import { getNewsById } from "@/lib/function";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const news = await getNewsById(id);

  return (
    <main className="max-w-5xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-[#403F3F] mb-6">Dragon News</h2>

      <article className="border border-gray-200 rounded-lg p-6 bg-white">
        <Image
          src={news.image_url}
          alt={news.title}
          width={1000}
          height={600}
          className="w-full h-112.5 object-cover rounded-md"
        />

        <h1 className="text-4xl font-bold text-[#403F3F] leading-tight mt-8">
          {news.title}
        </h1>

        <p className="mt-6 text-[#706F6F] leading-9 text-lg">{news.details}</p>

        <Link
          href={`/category/${news.category_id}`}
          className="inline-flex items-center gap-3 mt-10 bg-[#D72050] hover:bg-[#bf1d48] transition text-white px-7 py-4 rounded-md font-semibold"
        >
          <FaArrowLeft />
          All news in this category
        </Link>
      </article>
    </main>
  );
};

export default NewsDetailsPage;
