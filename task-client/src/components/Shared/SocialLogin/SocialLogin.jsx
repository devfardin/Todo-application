import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa";
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import { saveUser } from '../../../Apis/auth';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { signInWithGoogle, signInWithFacebook } = useAuth()
    const navigate=useNavigate()
    const haldelGoogle = async() => {
        signInWithGoogle()
            .then(async(res) => {
                await saveUser(res.user)
                toast.success("Account successfully created. You can now log in.");
                navigate('/dashboard')
                return
            })
            .catch((error) => {
                toast.error(`Account creation failed, ${error} `)
                return
            })
    }
    const facebooklogin = () => {
        signInWithFacebook()
            .then(async(res) => {
                await saveUser(res.user)
                toast.success("success", "Account successfully created. You can now log in.", "success");
                navigate('/dashboard')
                return
            })
            .catch((error) => {
                toast.error(`Account creation failed, ${error} `)
                return
            })
    }


    return (
        <div>
            <div onClick={haldelGoogle} className='border border-primery rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
                <div className='justify-center items-center bg-none'>
                    <FcGoogle className='text-secondary text-4xl '></FcGoogle>
                </div>
                <h1 className='text-lg font-normal col-span-4 text-center text-gray1'> Continue with Google</h1>
            </div>
            <div className='mt-4'>
                <div onClick={facebooklogin} className='border border-primery rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
                    <div className='justify-center items-center bg-none'>
                        <FaFacebook className='text-secondary text-4xl '></FaFacebook>
                    </div>
                    <h1 className='text-lg font-normal col-span-4 text-center text-gray1'> Continue with Facebook</h1>
                </div>
            </div>
        </div>
    )
}

export default SocialLogin