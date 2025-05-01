import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from './LatestNews';
import Navbar from './Navbar';
import LeftAside from '../components/LeftAside';
import RightAside from './RightAside';

const HomeLayout = () => {
     return (
       <div>
         <header>
           <Header></Header>
           <section className="w-11/12 mx-auto my-4">
             <LatestNews></LatestNews>
           </section>
           <nav className="w-11/12 mx-auto my-3">
             <Navbar></Navbar>
           </nav>
         </header>
         <main className='w-11/12 mx-auto gap-4 grid grid-cols-12 my-4'>
           <aside className='col-span-3'>
             <LeftAside></LeftAside>
           </aside>
           <section className="main col-span-6">
             <Outlet></Outlet>
           </section>
           <aside className='col-span-3'>
             <RightAside>

             </RightAside>
           </aside>
         </main>
       </div>
     );
};

export default HomeLayout;