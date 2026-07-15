import Link from "next/link";


export const metadata = {
  title: "Dragon News- Career",
};


const CareerPage = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="bg-white border rounded-lg p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-[#403F3F] mb-6">
          Join Our Team
        </h1>

        <p className="text-[#706F6F] leading-8 mb-8">
          Dragon News is always looking for talented journalists, developers,
          designers, and creative professionals who are passionate about
          building the future of digital news.
        </p>

        <div className="space-y-4">
          <div className="border rounded-lg p-5">
            <h2 className="text-2xl font-semibold">Frontend Developer</h2>
            <p className="text-gray-500 mt-2">React • Next.js • Tailwind CSS</p>
          </div>

          <div className="border rounded-lg p-5">
            <h2 className="text-2xl font-semibold">News Reporter</h2>
            <p className="text-gray-500 mt-2">Full-Time • Dhaka Office</p>
          </div>

          <div className="border rounded-lg p-5">
            <h2 className="text-2xl font-semibold">UI/UX Designer</h2>
            <p className="text-gray-500 mt-2">Figma • Design Systems</p>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 bg-[#D72050] text-white px-8 py-3 rounded hover:bg-[#b81a46] transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default CareerPage;
