import React from 'react'
import Introduction from '../components/home/Introduction'
import Subscription from '../components/home/Subscription';
import AppSection from '../components/home/AppSection';
import BrowseCategories from '../components/home/BrowseCategories';
import PopularProducts from '../components/home/PopularProducts';


const Home = () => {
  return (
    <section className="bg-app-cream">
      <section className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 pt-[64px]">
        <Introduction />
        <BrowseCategories />
        <PopularProducts />
        <AppSection />
        <Subscription />
      </section>
    </section>
  );
}

export default Home