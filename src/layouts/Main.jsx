import Header from '../components/shared/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'

const Main = () => {
  return (
    <section>
        <Header/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default Main