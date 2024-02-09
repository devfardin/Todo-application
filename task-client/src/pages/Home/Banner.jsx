import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Container from '../../components/Shared/Container'
import React from 'react'

const Banner = () => {
    return (
        <div className='pt-10'>
            <Container>
                <div className='flex flex-col-reverse sm:mb-10 md:mb-0 md:flex-row items-center justify-between gap-4'>
                    <div className='flex-1'>
                        <h1 className='text-6xl font-bold text-black'>Manage work <span className='text-primery block'>Efficiently.</span></h1>
                        <h1 className='text-2xl font-semibold py-3 text-black'>Plan, Track and Organise your work</h1>
                        <p className='text-lg font-normal text-text'> Discover the power of strategic planning as the cornerstone of your triumphs. Our approach empowers you to set crystal-clear objectives, meticulously define tasks, and craft a roadmap to success.
                        </p>
                        <Link to='/login' className='w-[150px] mt-3 px-4 py-3 bg-primery border border-primery block text-center text-white rounded-md text-base font-medium'>
                         Let’s Explore
                        </Link>
                    </div>
                    <div className='flex-1'>
                        <img className='w-full' src="https://micronet.work/demo/wp-content/uploads/2023/03/her_micronet.jpg" alt="" />
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Banner