import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/all-images/ava-1.jpg'
import ava02 from '../../assets/all-images/ava-2.jpg'
import ava03 from '../../assets/all-images/ava-3.jpg'
import ava04 from '../../assets/all-images/ava-4.jpg'

const Testimonial = () => {

    const settings={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
        ]
      };

    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, laborum? Aspernatur voluptas blanditiis odio obcaecati ratione,
                dolorum ipsum magnam itaque cum veniam officiis temporibus, natus sequi iste iure. Qui, facilis?
            </p>
            <div className='mt-3 d-flex align-item-center gap-4'>
                <img src={ava01} alt="" className='w-25 h-25 rounded-2'/>
                <div>
                    <h6 className="mb-0 mt-3">Jhon Doe</h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, laborum? Aspernatur voluptas blanditiis odio obcaecati ratione,
                dolorum ipsum magnam itaque cum veniam officiis temporibus, natus sequi iste iure. Qui, facilis?
            </p>
            <div className='mt-3 d-flex align-item-center gap-4'>
                <img src={ava02} alt="" className='w-25 h-25 rounded-2'/>
                <div>
                    <h6 className="mb-0 mt-3">Jhon Doe</h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, laborum? Aspernatur voluptas blanditiis odio obcaecati ratione,
                dolorum ipsum magnam itaque cum veniam officiis temporibus, natus sequi iste iure. Qui, facilis?
            </p>
            <div className='mt-3 d-flex align-item-center gap-4'>
                <img src={ava03} alt="" className='w-25 h-25 rounded-2'/>
                <div>
                    <h6 className="mb-0 mt-3">Jhon Doe</h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p className="section_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, laborum? Aspernatur voluptas blanditiis odio obcaecati ratione,
                dolorum ipsum magnam itaque cum veniam officiis temporibus, natus sequi iste iure. Qui, facilis?
            </p>
            <div className='mt-3 d-flex align-item-center gap-4'>
                <img src={ava04} alt="" className='w-25 h-25 rounded-2'/>
                <div>
                    <h6 className="mb-0 mt-3">Jhon Doe</h6>
                    <p className="section_description">Customer</p>
                </div>
            </div>
        </div>
    </Slider>
}

export default Testimonial
