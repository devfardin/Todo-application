import React, { useState } from 'react'
import { MdAddTask } from 'react-icons/md'
import SubmitTask from '../../../components/Shared/SubmitTask'

const AddTask = () => {
    const [openModal, setOpenModal]=useState(false)
  return (
    <div onClick={()=>setOpenModal(true)}
     className='border border-neutral-600 h-full rounded-md p-4 cursor-pointer'>
    <div className='flex items-center gap-3 h-full py-16 justify-center '>
        <MdAddTask className='text-2xl text-neutral-200'/>
      <h1 className='text-neutral-200 text-2xl font-medium'>Add New Task</h1>
    </div>
    <SubmitTask openModal={openModal} setOpenModal={setOpenModal}/>
  </div>
  )
}

export default AddTask