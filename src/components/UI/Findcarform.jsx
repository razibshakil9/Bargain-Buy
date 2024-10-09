import React from 'react'
import '../../styles/Findcarform.css'
import '../../styles/Findcarform.css'
import { Form, FormGroup } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'


const Findcarform = () => {
    return <Form className='form'>
        <div className='d-flex align-items-center justify-content-center flex-wrap'>
                <Row>
                    <Col lg='4' md='6'>
                        <FormGroup className='form_group'>
                            <input type="text" placeholder='Car Make' required />
                        </FormGroup>
                    </Col>
                    <Col lg='4' md='6'>
                        <FormGroup className='form_group'>
                            <input type="text" placeholder='Model(e.g:2018) ' required />
                        </FormGroup>
                    </Col>
                    <Col lg='4' md='6'>
                        <FormGroup className='form_group'>
                            <input type="text" placeholder='Varient' required />
                        </FormGroup>
                    </Col>
                    <Col lg='4' md='6'>
                        <FormGroup className='form_group'>
                            <input className='Price' type="numbers" placeholder='Price Range Maximum' required />
                        </FormGroup>
                    </Col>
                    <Col lg='4' md='6'>
                        <FormGroup className='select_group'>
                            <select name="" id="">
                                <option value="ac">Select Mode</option>
                                <option value="ac">Manual</option>
                                <option value="non-ac">Automatic</option>
                            </select>
                        </FormGroup>
                    </Col>
                    <Col lg='4' md='6'>
                        <FormGroup className='form_group'>
                            <button className="btn find_car-btn">Find Car</button>
                        </FormGroup>
                    </Col>
                </Row>
        </div>
    </Form>
}

export default Findcarform
