import React from 'react'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/contact.css'
import { Link } from 'react-router-dom';

const socialLinks = [
    {
        url: "#",
        icon: "ri-facebook-line",
    },
    {
        url: "#",
        icon: "ri-instagram-line",
    },
    {
        url: "#",
        icon: "ri-linkedin-line",
    },
    {
        url: "#",
        icon: "ri-twitter-line",
    },
];

const Contact = () => {
    return <Helmet title='Contact'>
        <CommonSection title='Contact' />
        <section>
            <Container>
                <Row>
                    <Col lg='7' md='7'>
                        <h6 className="fw-bold mb-4">Get in Touch</h6>
                        <Form>
                            <FormGroup className='contact_form'>
                                <Input type='text' placeholder='Your Name' />
                            </FormGroup>
                            <FormGroup className='contact_form'>
                                <Input type='email' placeholder='Email' />
                            </FormGroup>
                            <FormGroup className='contact_form'>
                                <textarea rows='5' placeholder='Message' className='textarea'></textarea>
                            </FormGroup>
                            <button className='btn contact_btn' type='submit'>Send Message</button>
                        </Form>
                    </Col>
                    <Col lg='5' md='5'>
                        <div className="contact_info">
                            <h6 className="fw-bold mt-4">
                                Contact Information
                            </h6>
                            <p className="section_description mb-0">123,Johar Town,Lahore,Pakistan</p>
                            <div className='d-flex align-items-center gap-2'>
                                <h6 className='fs-6 mb-0'>Phone:</h6>
                                <p className="section_description mb-0">+92-12345678</p>
                            </div>
                            <div className='d-flex align-items-center gap-2'>
                                <h6 className='mb-0 fs-6'>Email:</h6>
                                <p className="section_description mb-0">example@gmail.com</p>
                            </div>
                            <h6 className="fw-bold">Follow Us</h6>
                            <div className='d-flex align-items-center gap-4 mt-3'>
                                {
                                    socialLinks.map((item, index) => (
                                        <Link to={item.url} key={index} className='social_link-icon'><i className={item.icon}></i></Link>
                                    ))
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Contact
