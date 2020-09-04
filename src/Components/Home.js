import React from 'react';
import NewArrivals from './NewArrivals';
import Nav from './Nav';
import Banner from './Banner.js';
import '../cssModules/Home.css';

function Home() {
  return ( 
    <div className="App">
      <Nav/>
      <div className='home-banner'><Banner /></div>
      <NewArrivals name ='Cloths' />
      <NewArrivals name='Shoes' />
    </div>
  );
}

export default Home;
 