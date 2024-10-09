import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../../styles/about-sec.css'
import aboutimg from '../../assets/all-images/cars-img/bmw-offer.png'
import '../../styles/about.css'

const AboutSection = () => {
  return <section className='about_section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="about_section-content">
            <h4 className="section_subtitle">About Us</h4>
            <h2 className="section_title">Welcome to our services</h2>
            <p className="section_description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum officia voluptatem debitis, perspiciatis nesciunt necessitatibus.
              Aperiam quasi sunt nulla nesciunt nisi similique ducimus quisquam,
              sit rerum fuga inventore omnis molestias ab ex architecto dolorum soluta velit. In atque possimus blanditiis.
            </p>
            
            <div className="about_section-item d-flex align-items-center">
              <p className="section-description d-flex align-items-center gap-2">
              <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
              </p>

              <p className="section-description d-flex align-items-center gap-2">
              <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="about_section-item d-flex align-items-center">
              <p className="section-description d-flex align-items-center gap-2">
              <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
              </p>

              <p className="section-description d-flex align-items-center gap-2">
              <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className="about_img">
            <img src={aboutimg} alt="" className='w-100' />
          </div>
        </Col>

      </Row>
    </Container>
  </section>
}

export default AboutSection
