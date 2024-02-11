import { Helmet } from 'react-helmet-async'
import Banner from './Banner'
const Home = () => {
  return (
    <div className='bg-white h-screen'>
      <Helmet>
        <title> Home | Kuber</title>
      </Helmet>
      <div>
        {/* <Hero/> */}
        <Banner/>
       
       
      </div>
    </div>
  )
}

export default Home
