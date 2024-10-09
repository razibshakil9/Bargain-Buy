import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import "../../styles/footer.css"

const quciLinks = [
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/cars',
    display: 'Car Listing'
  },
  {
    path: '/blogs',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  },
]



const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className="logo footer_logo">
              <h1><Link to="/" className='d-flex align-items-center gap-3'>
                <i className="ri-car-line"></i>
                <span>Rent Car <br />Services</span>
              </Link></h1>
            </div>
            <p className="footer_logo-content">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla rem corrupti, provident corporis possimus dolorum
              similique eveniet at eum nostrum vitae neque officia beatae fuga, voluptatem et explicabo magni sunt!
            </p>
          </Col>
          <Col lg='2' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer_link-title'>
                Quick Links
              </h5>
              <ListGroup>
                {
                  quciLinks.map((items, index) => (
                    <ListGroupItem key={index} className='p-0 mt-3 quick_link'>
                      <Link to={items.path}>{items.display}</Link>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
              <h5 className='footer_link-title mb-4'>
                Head Office
              </h5>
              <p className='office_info'>
                123 Johar Town, lahore, Pakistan
              </p>
              <p className='office_info'>
                Phone: +92-16-4237277
              </p>
              <p className='office_info'>
                Email:razibshakil9@gmail.com
              </p>
              <p className='office_info'>
                Office Time:10am to 7pm
              </p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='12'>
            <div className="mb-4">
              <h5 className='footer_link-title'>
                Newsletter
              </h5>
              <p className="section_description">
                Subscribe our newsletter
              </p>
              <div className="newsletter">
                <input type="email" placeholder='Email' />
                <span><i className="ri-send-plane-line"></i></span>
              </div>
            </div>
          </Col>
          <Col lg='12'>
            <div className="footer_bottom">
              <p className="section_description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i className="ri-copyright-line"></i>Copyright{year}, Developed by Razib Shakil.All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
