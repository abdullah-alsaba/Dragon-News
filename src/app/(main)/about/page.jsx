export const metadata = {
  title: "Dragon News- About Us"
  
};

const AboutPage = () => {
  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="bg-white border rounded-lg p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-[#403F3F] mb-6">
          About Dragon News
        </h1>

        <p className="text-[#706F6F] leading-8 mb-5">
          Dragon News is a modern online news platform dedicated to delivering
          accurate, timely, and unbiased news from around the world.
        </p>

        <p className="text-[#706F6F] leading-8 mb-5">
          Our mission is to provide trustworthy journalism that keeps readers
          informed about current events, politics, sports, technology,
          entertainment, and more.
        </p>

        <p className="text-[#706F6F] leading-8">
          We believe that quality journalism empowers people to make informed
          decisions and understand the world better.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
