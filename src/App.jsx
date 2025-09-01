import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Creators from './components/Creators';
import Categories from './components/Categories';
import Discover from './components/Discover';
import Mashrooms from './components/Mashrooms';
import Works from './components/Works';
import Subscirbe from './components/Subscirbe';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Collection />
      <Creators />
      <Categories />
      <Discover />
      <Mashrooms />
      <Works />
      <Subscirbe />
      <Footer />
    </>
  );
};

export default App;