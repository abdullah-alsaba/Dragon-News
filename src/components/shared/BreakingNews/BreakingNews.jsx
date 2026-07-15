import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="max-w-7xl mx-auto flex items-center gap-4 bg-[#F3F3F3] px-4 py-3">
      <button className="bg-[#D72050] text-white px-6 py-3 font-semibold">
        Latest
      </button>

      <Marquee pauseOnHover={true} speed={60}>
        Match Highlights: Germany vs Spain — as it happened! &nbsp;&nbsp;&nbsp;
        Match Highlights: Germany vs Spain — as it happened! &nbsp;&nbsp;&nbsp;
        Match Highlights: Germany vs Spain — as it happened!
      </Marquee>
    </div>
  );
};

export default BreakingNews;
