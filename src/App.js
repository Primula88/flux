import React from 'react';
import TopNavbar from './components/TopNavbar';
import Services from './components/Service';
import Socials from './components/Socials';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
        <TopNavbar />
        <Header /> 
     <section className="services">
        <Services />
      </section>
      <Socials />
    </div>
  );
}

export default App;

