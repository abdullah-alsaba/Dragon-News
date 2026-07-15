import React from 'react';
import NoNews from '../shared/NoNews/NoNews';
import NewsCard from '../shared/NewsCard/NewsCard';

const AllNews = ({ news }) => {
    return (
      <div className="col-span-6">
        <h2 className="text-2xl font-bold text-[#403F3F] mb-6">All News</h2>

        {news.length > 0 ? (
          news.map((news) => <NewsCard key={news._id} news={news}></NewsCard>)
        ) : (
          <NoNews></NoNews>
        )}
      </div>
    );
};

export default AllNews;