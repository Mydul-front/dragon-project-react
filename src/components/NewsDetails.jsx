import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightAside from '../layouts/RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
     const data= useLoaderData();
     // console.log(data);
     const {id}=useParams();
     const [news, setNews] = useState({});
     // console.log(id, data, news);
     

     useEffect(()=>{
          const newsDetails =data.find(singleNews=> singleNews.id == id);
          setNews(newsDetails)
     }, [data, id]);

     return (
          <div>
               <header className='py-4'>
                    <Header></Header>
               </header>
               <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-4'>
               <section className='col-span-9'>
                    <h2 className='font-bold mb-5 '>News Details</h2>
                    <div>
                         <NewsDetailsCard news={news}></NewsDetailsCard>
                    </div>
               </section>

               <aside className='col-span-3'>
                    <RightAside></RightAside>
               </aside>

               </main>
          </div>
     );
};

export default NewsDetails;