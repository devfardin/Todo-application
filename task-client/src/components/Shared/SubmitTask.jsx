import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { RxCross2 } from 'react-icons/rx'
import { postTask } from '../../Apis/postMethod'
import useGetDate from '../../hooks/useGetDate';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const SubmitTask = ({ openModal, setOpenModal }) => {
  const { user } = useAuth()
  const [refetch]=useGetDate()
  const handleTaskSubmit=(e)=>{
    e.preventDefault()
    const form=e.target
    const title=form.name.value;
    const priority=form.priority.value
    const status=form.status.value
    const descriptions=form.descriptions.value
    const date=form.date.value
    const email=user.email
    const info={title, email, priority, status, descriptions, date}

    postTask(info)
    .then(()=>{
      toast.success('Task created successfully!')
      form.reset()
      refetch()
    })
    .catch(()=>{
      toast.error("Error creating task. Please try again.")
    })
  
  }
  return (
    <div className="w-72 mx-auto flex items-center justify-center relative overflow-y-auto">
    <div onClick={() => setOpenModal(false)} className={`fixed top-0 flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : ' overflow-y-auto invisible opacity-0'} inset-0 w-full overflow-y-auto h-full backdrop-blur-sm bg-black/20 duration-100`}>
      <div onClick={(e_) => e_.stopPropagation()} className={`absolute overflow-y-auto flex justify-center w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 overflow-y-auto opacity-0 duration-150'}`}>
        <form onSubmit={handleTaskSubmit} 
        className="w-full p-5">
          <div className='flex items-center justify-between gap-10'>
            <h1 className=" text-2xl font-semibold text-left">Update Your Task</h1>
            <RxCross2 onClick={() => setOpenModal(false)} className='text-4xl  mx-auto mr-0 text-primery cursor-pointer' />
          </div>
          <div>
            <label className='text-xl font-medium mb-1 text-black1  ml-1 mt-2 block'>Task Name</label>
            <input className='text-base placeholder:text-textColor bg-neutral-50 rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-3 w-full' placeholder='Task Name' name='name' type='text' />
          </div>

          <div className='flex items-center justify-between gap-4'>
            <div className='flex-1'>
              <label className='text-xl font-medium mb-1 text-black1  ml-1 mt-2 block'>Priority</label>
              <select className='text-base placeholder:text-textColor bg-neutral-50 rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-3 w-full' placeholder='Priority' name='priority' type='select'>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className='flex-1'>
              <label className='text-xl font-medium mb-1 text-black1  ml-1 mt-2 block'>Status</label>
              <select className='text-base placeholder:text-textColor bg-neutral-50 rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-3 w-full' placeholder='Status' name='status' type='select'>
                <option value="Completed">Completed</option>
                <option value="Process">Process</option>
                <option value="Close">Close</option>
              </select>
            </div>
          </div>

          <div>
          <label className='text-xl font-medium mb-1 text-black1  ml-1 mt-2 block'>Date</label>
            <input  type="date" placeholder="dd/mm/yyyy"
            className='text-base placeholder:text-textColor bg-neutral-50 rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-3 w-full' name='date' />
          </div>              
          

          <div>
            <label className='text-xl font-medium mb-1 text-black1  ml-1 mt-2 block'>Description</label>
            <textarea className='text-base placeholder:text-textColor bg-neutral-50 rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none  p-3 w-full h-20' placeholder='Write you task escription' name='descriptions' type='text'> </textarea>
          </div>

          <button className='flex  items-center border-r-[6px] mt-2  border-neutral-700 hover:border-purple-600 duration-300   
        px-4 py-3  hover:bg-gray-300 hover:text-neutral-600 group  text-gray-300 bg-neutral-700 rounded text-xl border-r-6 font-medium'>
            <FaPlus className='w-5 h-5 group-hover:text-neutral-600  duration-300 text-neutral-300 !hover:text-neutral-600' />
            <span className='mx-4 font-medium'>Add Task</span>
          </button>
        </form>
      </div>
    </div>
  </div>

  )
}

export default SubmitTask