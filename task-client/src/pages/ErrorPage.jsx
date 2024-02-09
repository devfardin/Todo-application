import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <section className='bg-white '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div className='flex flex-col items-center max-w-md mx-auto text-center'>
          <img src="https://i.ibb.co/X7wvV1w/error.jpg" alt="" />
         
          <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
            Something Went Wrong!
          </h1>
          <p className='mt-4 text-gray-500 '>
          Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarity unavailable.
          </p>

          <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
        
            <Button label={'Take Me Home'} onClick={() => navigate('/')} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
