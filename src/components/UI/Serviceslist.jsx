import React from 'react'
import { Col } from 'reactstrap'
import '../../styles/services-list.css'
import servicesData from '../../assets/data/serviceData'


const Serviceslist = () => {
    return <>
        {
            servicesData.map(item => (
                <ServicesItem item={item} key={item.id} />
            ))
        }
    </>
}
const ServicesItem = ({ item }) => {
    return (
        <Col lg='4' md='6' sm='12' className='mb-3'>
            <div className="services_item">
                <span className='mb-3 d-inline-block'>
                    <i className={item.icon} />
                </span>
                <h6>{item.title}</h6>
                <p className="sec_description">{item.desc}</p>
            </div>
        </Col>
    )
}
export default Serviceslist
