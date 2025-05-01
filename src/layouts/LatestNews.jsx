import React from 'react';
import Marquee from 'react-fast-marquee';


const LatestNews = () => {
     return (
       <div className="flex items-center p-1 gap-5 bg-base-200">
         <p className="text-base-100 bg-secondary rounded-sm p-2">Latest</p>
         <Marquee className="gap-5" pauseOnHover={true} speed={30}>
           <p className="font-bold">
             আমি কারো পেছনে দৌড়াই না। যে আমার মূল্য বোঝে, সে নিজেই আমার পাশে
             আসবে। আর যারা বোঝে না, তাদের জন্য আমি সময় নষ্ট করি না।
           </p>
           <p className="font-bold">
             আমার হাসির আড়ালে লুকানো থাকে এক যোদ্ধার গল্প। আমি হার মানিনি, হার
             মানবোও না – কারণ আমি তৈরি হয়েছি যুদ্ধের জন্য, বাঁচার জন্য নয় শুধু
           </p>
           <p className="font-bold">
             আমি চুপচাপ থাকি মানে এই না যে আমি কিছু বুঝি না। সময় আসলে এমন ভাবে
             জবাব দেই, লোকজন চুপ হয়ে যায়। কারণ আমি কারো থেকে কম না, শুধু নিজেকে
             দেখানোর প্রয়োজন অনুভব করি না।
           </p>
         </Marquee>
       </div>
     );
};

export default LatestNews;