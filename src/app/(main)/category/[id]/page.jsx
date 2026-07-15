import AllCategories from '@/components/AllCategories/AllCategories';
import AllNews from '@/components/AllNews/AllNews';
import SocialSide from '@/components/SocialSide/SocialSide';
import { getCategories, getNewsByCategoryId } from '@/lib/function';
import React from 'react';







const CategoryNewsDetailsPage = async ({ params }) => {
    const { id } = await params
    



     const categories = await getCategories();
     const news = await getNewsByCategoryId(id);

     return (
       <div className="container mx-auto grid grid-cols-12 gap-6 my-8 px-30">
         <AllCategories categories={categories} activeId={id} />

         <AllNews news={news} />

         <SocialSide />
       </div>
     );
};

export default CategoryNewsDetailsPage;