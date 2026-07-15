import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-5">
      <div className="bg-white rounded-lg shadow-md p-12 text-center max-w-xl w-full">
        <div className="text-7xl mb-5">📰</div>
        <h1 className="text-8xl font-black text-red-600">404</h1>

        <h2 className="text-3xl font-bold mt-5 text-[#403F3F]">
          News Not Found
        </h2>

        <p className="text-[#706F6F] mt-4 leading-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been
          moved. Please return to the homepage to continue reading the latest
          news.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#D72050] hover:bg-[#bb1844]
          transition-all duration-300
          text-white font-semibold px-8 py-3 rounded"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
