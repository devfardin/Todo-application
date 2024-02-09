import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../Apis/auth'
import { uploadImage } from '../../Apis/imageHosting'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { PiEye, PiEyeSlash } from 'react-icons/pi'
import { ImSpinner9 } from "react-icons/im";
import SocialLogin from '../../components/Shared/SocialLogin/SocialLogin'


const SignUp = () => {
  const { createUser, updateUserProfile,logOut, loading  } = useAuth()
  const [showPassword, setShowPassword] = useState(false)
  const [registrationError, setRegistrationError] = useState('')
  const navigate=useNavigate()
  const registration = async (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.files[0]
    createUser(email, password)
      .then(async (res) => {
        await saveUser(res.user)
        await getToken(res.user?.email)
          .then(res => {
            uploadImage(photo)
              .then(res => {
                updateUserProfile(name, res?.data?.display_url)
                  .then(() => {
                    toast.success('User account created successfully! Please Login')
                    logOut()
                    navigate('/login')
                    return
                    
                  })
              })
            return
          })
          .catch(error => {
            toast.error(error)
          })

      })
      .catch((error) => {
        toast.error(error.message)
        return
      })

    }
  return (
    <div className='bg-sectionbg py-14'>
      <Helmet>
        <title>Kuber | Register </title>
      </Helmet>
      <div className='container md:w-10/12/ lg:w-2/4 mx-auto px-4'>
        <div className='bg-white px-6 py-10 rounded-lg'>
          <h1 className='text-2xl font-medium text-black1 mb-5'>Create your account</h1>
          <form onSubmit={registration}>
            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Name</label>
            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Name' name='name' type='text' />

            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Email</label>
            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Email' name='email' type='email' required />

            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Photo</label>
            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Profile Image' name='image' type='file' />

            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-4 block'>Password</label>

            <div className='h-16 relative'>
              <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} required />
              <span className='absolute top-4 right-5 text-2xl' onClick={() => setShowPassword(!showPassword)}>
                {
                  showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>
                }
              </span>
            </div>
            <div>
              {
                registrationError && <p className='text-lg text-red-400 font-normal'> {registrationError} </p>
              }
            </div>
            <button  className='text-lg px-10 py-[14px] bg-primery hover:bg-hover rounded-lg text-white mt-5 w-full inline-block duration-300' >
              {
                loading? <ImSpinner9 className='animate-spin text-center inline-block text-3xl'> </ImSpinner9> : <span>Register</span>
              }
            </button>
            <h1 className='text-center text-lg font-normal text-black1  my-3'> Don't you have an account?
              <Link to='/login' className='text-lg hover:underline hover:text-hover duration-300 ml-2 font-normal text-primery inline-block'>Login</Link>
            </h1>
          </form>
          <div className='p-x-10'>
            <div class="relative flex  items-center  my-6 ">
              <div class="flex-grow border-t border"></div>
              <span class="flex-shrink mx-4 text-black1 text-xl font-normal">OR</span>
              <div class="flex-grow border-t border"></div>
            </div>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
