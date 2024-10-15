import React from 'react';
import TopNavbar from './components/TopNavbar';
import Services from './components/Service';
import Socials from './components/Socials';
import Header from './components/Header';
import WhoWeAre from './components/WhoWeAre';
import './App.css';

function App() {
  return (
    <div className="app">
        <TopNavbar />
        <Header /> 
        <WhoWeAre />
     <section className="services">
        <Services />
      </section>
      <Socials />
    </div>
  );
}

export default App;

