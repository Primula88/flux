import React from 'react';
import TopNavbar from './components/TopNavbar';
import Services from './components/Service';
import Header from './components/Header';
import WhoWeAre from './components/WhoWeAre';
import './App.css';

function App() {
  return (
    <div className="app">
        <TopNavbar />
        <Header />
        <section className="whoweare"> 
        <WhoWeAre />
        </section>
     <section className="services">
        <Services />
      </section>
    </div>
  );
}

export default App;

