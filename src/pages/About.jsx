import React from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import AboutSection from '../components/UI/AboutSection'
import { Container, Row, Col } from 'reactstrap'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import driverImg from '../assets/all-images/drive.jpg'

const About = () => {
  return <Helmet title='About'>
    <CommonSection title='About Us' />
    <AboutSection />
    <section className="about_page-section">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12'>
          <div className="about_page-img">
            <img src={driverImg} alt="" className='w-100 rounded-3' />
          </div>
          </Col>
          <Col lg='6' md='6' sm='12'>
            <div className="about_page-content">
              <h2 className="section_title">We are committed to provide safe ride solutions</h2>
              <p className='section_description'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore corrupti alias maxime quidem, necessitatibus dignissimos,
                nisi facere totam et assumenda repellendus eveniet consectetur sapiente nobis pariatur suscipit laborum illum perferendis?
              </p>
              <p className='section_description'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore corrupti alias maxime quidem, necessitatibus dignissimos,
                nisi facere totam et assumenda repellendus eveniet consectetur sapiente nobis pariatur suscipit laborum illum perferendis?
              </p>
              <div className='d-flex align-items-center gap-3 mt-4'>
                <span className='fs-4'><i className="ri-phone-line"></i></span>
                <div>
                  <h6 className="section_subtitle">Need Any Help</h6>
                  <h4>+01234567899</h4>
                </div>
              </div>
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
    <BecomeDriverSection/>
    <section>
      <Container>
        <Row>
          <Col lg='12'className='mb-5 text-center'>
            <h6 className="section_subtitle">
              Experts
            </h6>
            <h2 className="section_title">
              Our Members
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default About
