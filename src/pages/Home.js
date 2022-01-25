import React from 'react';
import HomeCard from '../components/HomeComponents/HomeCard';
import HomeInfo from '../components/HomeComponents/HomeInfo';
import HomePartner from '../components/HomeComponents/HomePartner';
import HomeSlider from '../components/HomeComponents/HomeSlider';

export default function Home() {
  return( 
  <div>
      <HomeSlider/>
      <HomeCard/>
      <HomeInfo/>
      <HomePartner/>
  </div>
  )}
