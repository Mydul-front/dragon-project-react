import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
     console.log(news);
     return (
       <div className="space-x-3">
         <img className="w-full h-[420px] my-3" src={news.image_url} alt="" />
         <h2 className="text-2xl font-semibold text-accent mb-3">
           {news.title}
         </h2>
         <p className=" ">{news.details}</p>
         <div className="my-5 ">
           <Link
             className="btn btn-secondary rounded-sm hover:text-acccent"
             to={`/category/${news.category_id}`}
           >
             <FaArrowCircleLeft /> Back to category
           </Link>
         </div>
       </div>
     );
};

export default NewsDetailsCard;