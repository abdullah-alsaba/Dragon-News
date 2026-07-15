import Image from "next/image";
import Link from "next/link";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { _id,title, image_url, details, total_view, rating, author } = news;

  return (
    <article className="border rounded-lg overflow-hidden bg-white mb-8">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#F3F3F3] px-5 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={author?.img || "/default-user.png"}
            alt={author?.name || "Author"}
            width={45}
            height={45}
            className="rounded-full"
          />

          <div>
            <h4 className="font-semibold text-[#403F3F]">{author.name}</h4>

            <p className="text-sm text-[#706F6F]">
              {author?.published_date?.slice(0, 10) || "No Date"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-[#D72050]" />
          <FaShareAlt className="cursor-pointer hover:text-[#D72050]" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h2 className="text-2xl font-bold text-[#403F3F] leading-10">
          {title}
        </h2>

        <Image
          src={image_url}
          alt={title}
          width={800}
          height={450}
          className="w-full h-65 object-cover rounded-lg my-5"
        />
        <div className="text-[#706F6F] leading-8">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}...
              <Link
                href={`/news/${_id}`}
                className="text-[#FF8C47] font-semibold ml-1"
              >
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t px-5 py-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`${
                index < Math.round(rating.number)
                  ? "text-[#FF8C47]"
                  : "text-gray-300"
              }`}
            />
          ))}

          <span className="ml-2 font-medium text-[#706F6F]">
            {rating.number}
          </span>
        </div>

        <div className="flex items-center gap-2 text-[#706F6F]">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
