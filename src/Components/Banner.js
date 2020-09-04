import React from 'react' ;
import '../cssModules/Home.css';
import image1 from '../images/image1.jpg';


const Banner = () => {
    return (
        <div className='banner'>
        <img src = {image1} alt ='banner'/>
        </div>
    )
}

export default Banner;