
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Audience } from './components/Audience';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Audience />
        <ContactForm />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
