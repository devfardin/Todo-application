import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiEyeSlash, PiEye } from 'react-icons/pi';
import { Helmet } from "react-helmet-async"
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import SocialLogin from '../../components/Shared/SocialLogin/SocialLogin';
import { saveUser } from '../../Apis/auth';
import { ImSpinner9 } from 'react-icons/im';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signIn, loading, setLoading } = useAuth()
    const navigate = useNavigate()
    const loginHandel = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(async (res) => {
                await saveUser(res.user)
                toast.success(`Login successful! Welcome back `);
                setLoading(false)
                navigate('/dashboard/my-task')
                return
            })
            .catch(() => {
                toast.error("Login failed. Please check your username and password and try again.")
                setLoading(false)
                return
            })
    }
    return (
        <div className='bg-sectionbg py-14'>
            <Helmet>
                <title>Kuber | Login </title>
            </Helmet>
            <div className='container w-9/12 md:w-2/4 lg:w-2/6 mx-auto px-4'>
                <div className='bg-white px-6 py-10 rounded-lg'>
                    <h1 className='text-2xl font-bold text-black1 mb-5'>Login to your account</h1>
                    <form onSubmit={loginHandel}>
                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-5 block'>Email</label>
                        <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Email' name='email' type='email' />

                        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-4 block'>Password</label>
                        <div className='h-16 relative'>
                            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-4 px-5 w-full' placeholder='Password' name='password' type={showPassword ? 'text' : 'password'} />

                            <span className='absolute top-4 right-5 text-2xl' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <PiEye> </PiEye> : <PiEyeSlash> </PiEyeSlash>
                                }
                            </span>
                        </div>
                        <button className='text-lg px-10 py-[14px] bg-primery hover:bg-hover rounded-lg text-white mt-5 w-full inline-block duration-300' >
                            {
                                loading ? <div className='flex gap-2 justify-center text-neutral-300 text-base font-semibold'><ImSpinner9 className='animate-spin text-center inline-block text-2xl'> </ImSpinner9> Login</div> : <span className='text-neutral-100 text-base font-semibold'>Login</span>
                            }
                        </button>
                        <h1 className='text-center text-lg font-normal text-black1  my-3'> Don't you have an account?
                            <Link to='/signup' className='text-lg hover:underline hover:text-hover duration-300 ml-2 font-normal text-primery inline-block'>Register</Link>
                        </h1>
                    </form>
                    <div className='p-x-10'>
                        <div class="relative flex  items-center  my-6 ">
                            <div class="flex-grow border-t border"></div>
                            <span class="flex-shrink mx-4 text-black1 text-xl font-normal">OR</span>
                            <div class="flex-grow border-t border"></div>
                        </div>

                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login