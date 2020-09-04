import React, {useState} from 'react' ;
import '../cssModules/Home.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/image1.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <div className='banner'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
       </div>
    )
}

export default Banner;