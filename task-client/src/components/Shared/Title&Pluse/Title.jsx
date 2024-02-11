import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6"; import SubmitTask from '../SubmitTask';
const Title = ({ title, totalTask }) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <div className='flex items-center justify-between gap-10 mb-9'>
                <h1 className='task relative text-3xl font-medium text-white before:border-[2px] before:top-0.5 before:border-[#68AF65] before:w-20 before:rounded'>{title} <span className='text-neutral-200 text-2xl'>{totalTask}</span></h1>
                <div className='cursor-pointer'>
                    <div onClick={() => setOpenModal(true)}
                        className='border-[3px] p-2.5 rounded-full border-neutral-600'>
                        <FaPlus className='text-neutral-200 text-2xl' />
                    </div>
                </div>
            </div>
            <SubmitTask openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default Title