import React, {useState} from 'react' ;
import '../cssModules/Home.css';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

    return (
        <div className='banner'>
          <div className="bannerImage1">
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://res.cloudinary.com/chiaka1996/image/upload/v1640736091/generators_flgmq8.jpg'
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://res.cloudinary.com/chiaka1996/image/upload/v1640736102/samschris.jpg_BkU_nXIqF_tvwfya.jpg'
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://res.cloudinary.com/chiaka1996/image/upload/v1640736081/desperado.jpg_BkoX219qF_gf0ekd.jpg'
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>

    <div className="bannerImage2">
      <div style={{marginBottom: '4vh'}}> 
      <img
          src='https://res.cloudinary.com/chiaka1996/image/upload/v1640735813/flash_sales_ghprzw.png'
          alt="fourth slide"
        />
      </div>

      <div> 
      <img
          src='https://res.cloudinary.com/chiaka1996/image/upload/v1640735825/clearance_sale_wasoy3.jpg'
          alt="fifth slide"
        />
        </div>
      </div>
       </div>
    )
}

export default Banner;