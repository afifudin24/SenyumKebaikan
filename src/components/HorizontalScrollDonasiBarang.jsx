import React, { useRef } from 'react';
import DataDonasiBarang from './DataDonasiBarang';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const settings = {
 dots: false,
  infinite: true, // change to true for seamless autoplay looping
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,      // enable auto-scroll
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
  
};

// Tombol Next
// Tombol Next
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        right: '10px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        opacity: 0.5,
        justifyContent: 'center',
        background: 'white',
        padding: '8px',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        cursor: 'pointer',
      }}
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

// Tombol Prev
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        opacity: 0.5,
        justifyContent: 'center',
        zIndex: 2,
        background: 'white',
        padding: '8px',
        borderRadius: '100%',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        cursor: 'pointer',
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

const HorizontalScrollDonasiBarang = ({data, img}) => {




  return (
     <div style={{ position: 'relative', padding: '0 ' }}>
    <Slider {...settings}>
      {data.map((item, i) => (
       <div className='w-full'>
          <DataDonasiBarang img={img} key={i} type={item.type} title={item.title} description={item.description} items={item.items}/>
          
       </div>
      ))}
      </Slider>
      </div>
  );
};

export default HorizontalScrollDonasiBarang;
