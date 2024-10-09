import React from 'react'
import { Container, Row } from 'reactstrap'
import carData from '../../assets/data/carData'
import  AuctionCard  from './Card'
import Helmet from '../Helmet/Helmet'
import CommonSection from '../UI/CommonSection'

const Acution = () => {
  return (
    <Helmet title='Auction'>
    <CommonSection title='Car Auction' />
      <Container className="mt-5">
      <Row>
        {carData?.map(card=> (
          <AuctionCard car={card} key={card?.id}/>
        ))}
      </Row>
    </Container>
        </Helmet>
  )
}

export default Acution
