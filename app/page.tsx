import React from 'react';
import { Hero } from './components/Hero';
import { ParallaxScrollDemo } from './components/images';
import CopyrightPage from './components/copyright';
 // Corrected import path
 // import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <div> 
      <Hero />
      {/* <TabsDemo /> */}
    {/* <Contact /> */}
     <ParallaxScrollDemo />
     <CopyrightPage />
    </div>
  
    </main>
    
  );
}