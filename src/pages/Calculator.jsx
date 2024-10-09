import React from 'react'
import FinanceContainer from '../components/FinanceContainer/FinanceContainer'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

const Calculator = () => {
  return (
    <Helmet title='Calculator'>
      <CommonSection title='Price Calculator'/>
      <FinanceContainer/>
    </Helmet >
  )
}

export default Calculator
