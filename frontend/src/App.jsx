import React from 'react';
import TopNav from './components/TopNavbar';
import Footer from './components/Footer';
import Cards from './components/Cards';
import './App.css';

const App = () =>{
  return(
    <div>
      <TopNav />
      <main>
      <Cards />  
      </main>
      <Footer/>
    </div>
  );
};

export default App;