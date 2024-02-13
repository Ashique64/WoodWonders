import React from 'react'
import NavBar from '../../components/NavBar/navbar'
import { useNavigate } from 'react-router-dom';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeCategoryCard from '../../components/HomeCategoryCard/HomeCategoryCard';

const Home = () => {
  
  return (
    <div>
        <NavBar/>
        <HomeBanner/>
        <HomeCategoryCard/>
    </div>
  )
}

export default Home