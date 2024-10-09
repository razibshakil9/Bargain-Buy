import React from 'react'
import HeroSlider from '../components/UI/HeroSlider'
import Helmet from '../components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import Findcarform from '../components/UI/Findcarform'
import AboutSection from '../components/UI/AboutSection'
import Serviceslist from '../components/UI/Serviceslist'
import carData from '../assets/data/carData'
import Caritems from '../components/UI/Caritems'
import BecomeDriverSection from '../components/UI/BecomeDriverSection'
import Testimonial from '../components/UI/Testimonial'
import BlogList from '../components/UI/BlogList'

const Home = () => {
  return (
    <Helmet title='Home'>
      {/* ===========HERO SECTION============== */}
      <section className="p-0 hero_slider-section">
        <HeroSlider/>
          <div className="hero_form">
            <Container>
              <Row className="form_row ">
                {/* <Col lg='4' md='4'>
                <div className="find_car-left">
                  <h2>Find your best car here</h2>
                </div>
                </Col> */}

                <Col lg='12' md='8' sm='12'>
                <Findcarform/>
                </Col>
              </Row>
            </Container>
          </div>
      </section>
      {/* ==================About Section============== */}
      <AboutSection/>
      {/* =================services section================= */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
            <h6 className="section_subtitle">See Our</h6>
            <h2 className="section_title">Popular Services</h2>
            </Col>
            <Serviceslist/>
          </Row>
        </Container>
      </section>
      {/* =================car offer section========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
            <h6 className="section_subtitle">
              Come with
            </h6>
            <h2 className="section_title">Hot Offers</h2>
            </Col>
            {
              carData.slice(0,6).map(item=>(
                <Caritems item={item} key={item.id}/>
              ))
            }
          </Row>
        </Container>
      </section>
      {/* =================Become A Driver================ */}
      <BecomeDriverSection/>
      {/* ====================testimonial section================ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center'>
              <h6 className="section_subtitle">Our clients says</h6>
              <h2 className="section_title">Testimonial</h2>
            </Col>
            <Testimonial/>
          </Row>
        </Container>
      </section>
      {/* =====================blog item section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h6 className="section_subtitle">Explore our Blogs</h6>
              <h2 className="section_title">Latest Blogs</h2>
            </Col>
            <BlogList/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
