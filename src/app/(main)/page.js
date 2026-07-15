import AllCategories from "@/components/AllCategories/AllCategories";
import AllNews from "@/components/AllNews/AllNews";
import SocialSide from "@/components/SocialSide/SocialSide";


async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json()
  return data.data;
  
}

export default async function Home() {
  const categories = await getCategories()

  return (
    <div className="container mx-auto grid grid-cols-12 gap-6 my-8 px-30">
      <AllCategories categories={categories} activeId={"01"} />

      <AllNews />

      <SocialSide />
    </div>
  );
}
