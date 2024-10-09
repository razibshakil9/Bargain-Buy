import React from 'react'
import '../../styles/become-driver.css'
import { Container,Row,Col } from 'reactstrap'
import driverimg from '../../assets/all-images/toyota-offer-2.png'

const BecomeDriverSection = () => {
  return <section className="become_driver">
    <Container>
        <Row>
            <Col lg='6' md='6' sm='12' className='become_driver-btn'>
            <img src={driverimg} alt="" className='w-100' />
            </Col>

            <Col lg='6' md='6' sm='12'>
            <h2 className="become_driver-title">
                You can find the best cars here 
            </h2>
            {/* <button className="btn become_driver-btn mt-4">
                Become a Driver
            </button> */}
            </Col>
        </Row>
    </Container>
  </section>
}

export default BecomeDriverSection
