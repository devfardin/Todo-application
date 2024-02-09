import { Helmet } from 'react-helmet-async'
import Banner from './Banner'
import Service from './Services/Service'
import FunFact from './FunFact'
import OurTeam from './OurTeam'
const Home = () => {
  return (
    <div className='pt-3'>
      <Helmet>
        <title> Home | Kuber</title>
      </Helmet>
      <div>
        <Banner/>
        <Service/>
        <FunFact/>
        <OurTeam/>
       
      </div>
    </div>
  )
}

export default Home
