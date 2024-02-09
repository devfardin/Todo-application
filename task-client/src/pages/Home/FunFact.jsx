import React from 'react'
import Container from '../../components/Shared/Container'

const FunFact = () => {
    return (
        <div className='py-16'>
            <Container>
                <div className='flex flex-col-reverse md:flex-row justify-between gap-4 relative'>
                    <div className='flex-1'>
                        <h1 className='text-4xl font-bold text-black'>We love our customers and they love us too.</h1>
                        <p className='text-lg font-normal text-text'> Discover the power of strategic planning as the cornerstone of your triumphs. Our approach empowers you to set crystal-clear objectives, meticulously define tasks, and craft a roadmap to success.
                        </p>
                        <p className='text-lg font-normal text-text md:hidden lg:flex'> Discover the power of strategic planning as the cornerstone of your triumphs. Our approach empowers you to set crystal-clear objectives, meticulously define tasks, and craft a roadmap to success.
                        </p>
                        <div className='flex flex-col md:flex-row justify-start lg:justify-between gap-6 mt-4'>
                            <div className='flex-1'>
                                <h1 className='text-2xl font-medium text-black'>Intense research</h1>
                                <p className='text-base font-normal text-text'>It is a long established fact that a reader will be distracted.</p>
                            </div>
                            <div className='flex-1'>
                                <h1 className='text-2xl font-medium text-black'>Audience segmentation</h1>
                                <p className='text-base font-normal text-text'>It is a long established fact that a reader will be distracte</p>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h1 className='text-2xl font-semibold text-black'>Update With Us</h1>
                            <form >
                                <div className='relative'>
                                    <input type="text" placeholder='Your Email Here' className='text-lg font-medium text-black outline-none focus:outline-none w-full py-3 px-4 border-2 rounded-md mt-1 border-neutral-300 hover:border-primery duration-300 focus:border-primery ' />
                                    <button className='text-lg font-medium text-white bg-primery py-[10px] px-4 rounded-md absolute top-2 right-1'>Subscribe</button>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className='flex-1  '>
                        <img src="https://micronet.work/demo/wp-content/uploads/2023/03/hero2.png" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FunFact