import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import Chatbot from '../chatbot/Chatbot'

const Layout = () => {
  return <>
    <Header/>
        <Routers/>
        <Chatbot/>
    <Footer/>
  </>
}

export default Layout
