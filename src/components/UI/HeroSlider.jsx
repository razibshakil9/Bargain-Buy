import React from 'react'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/hero-slider.css'

const HeroSlider = () => {

    const settings=
    {
        // fade:true,
        // speed:2000,
        // autoplaySpeed:3000,
        // infinite:true,
        // autoPlay:true,
        // slideToShow:1,
        // slidesToScroll:1,
        // pauseOnHover:false,
        infinite: true,
        speed: 4000,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: false,
        arrows: false,
    
        dots: false,
    }
    

  return( 
    <div>
  <Slider {...settings} className='hero_slider'>
    <div className="slider_item slider_item-01 mt0">
        <Container>
            <div className="slider_content">
                <h4 className="text-light mb-3">
                    Bargain N Buy
                </h4>
                <h1 className='text-light mb-4'>
                    Buy Best Cars here
                </h1>
                <button className="btn reserve_btn mt-4">
                    <Link to='/cars'>Buy Now</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider_item slider_item-02 mt0">
        <Container>
            <div className="slider_content">
                <h4 className="text-light mb-3">
                    Bargain N Buy
                </h4>
                <h1 className='text-light mb-4'>
                    Buy Best Cars here
                </h1>
                <button className="btn reserve_btn mt-4">
                    <Link to='/cars'>Buy Now</Link>
                </button>
            </div>
        </Container>
    </div>

    <div className="slider_item slider_item-03 mt0">
        <Container>
            <div className="slider_content">
                <h4 className="text-light mb-3">
                    Bargain N Buy
                </h4>
                <h1 className='text-light mb-4'>
                    Buy Best Cars here
                </h1>
                <button className="btn reserve_btn mt-4">
                    <Link to='/cars'>Buy Now</Link>
                </button>
            </div>
        </Container>
    </div>
  </Slider>
  </div>
  )
}

export default HeroSlider
