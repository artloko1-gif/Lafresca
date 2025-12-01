import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { BranchLocator } from './components/BranchLocator';
import { ServicesFeatures } from './components/ServicesFeatures';
import { References } from './components/References';
import { News } from './components/News';
import { Footer } from './components/Footer';
import { ContentProvider } from './contexts/ContentContext';

function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <Hero />
        <Stats />
        <ServicesFeatures />
        <BranchLocator />
        <News />
        <References />
        <Footer />
      </div>
    </ContentProvider>
  );
}

export default App;
