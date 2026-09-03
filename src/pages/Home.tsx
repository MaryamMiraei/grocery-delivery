import React from 'react'
import Introduction from '../components/Introduction'
import BrowseCategories from '../components/BrowseCategories';

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Introduction />
      <BrowseCategories/>
    </section>
  );
}

export default Home