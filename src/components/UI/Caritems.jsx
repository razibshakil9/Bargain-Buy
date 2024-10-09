import React from 'react'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../../styles/car-item.css'


const Caritems = (props) => {

    const { imgUrl, model, carName, automatic, speed, price } = props.item

    return <Col lg='4' md='6' sm='12' className='mb-5'>
        <div className="car_item">
            <div className="car_img">
                <img src={imgUrl} alt="" className='w-100' />
            </div>
            <div className="car_item-content mt-4">
                <h4 className="section_title text-center">{carName}</h4>
                <h6 className="rent_price text-center mt-">${price}.00 <span>/ Days</span></h6>

                <div className="car_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                    <span className='d-flex align-items-center gap-1'><i className="ri-car-line"></i>{model}</span>
                    <span className='d-flex align-items-center gap-1'><i className="ri-settings-2-line"></i>{automatic}</span>
                    <span className='d-flex align-items-center gap-1'><i className="ri-timer-flash-line"></i>{speed}</span>
                </div>
                {/* <button className="w-50 car_item-btn car_btn-rent">
                    <Link to={`/cars/${carName}`}>Rent</Link>
                </button> */}
                <button className="w-100 car_item-btn car_btn-details">
                    <Link to={`/cars/${carName}`}>Details</Link>
                </button>
            </div>
        </div>
    </Col>
}

export default Caritems
