import React, { useState } from 'react'
import { postTask } from '../../../Apis/postMethod'
import toast from 'react-hot-toast'

const AddTask = () => {
  const [loading, setLoading] = useState(false)
  const handleTaskSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const Priority = form.Priority.value;
    const Status = form.Status.value;
    const Type = form.Type.value;
    const description = form.description.value;
    const taskInfo = {
      name, Priority, Status, Type, description
    }
       postTask(taskInfo)
      .then((res) => {
        setLoading(true)
        if(res.acknowledged == true){
          toast.success('Your Task Successfully Uploaded')
          setLoading (false)
        }
        else{
          toast.error('Upload Faild')
        }
      })
     

  }
  return (
    <div>
      <h1 className='text-2xl font-semibold text-black'>Add your task </h1>
      <form onSubmit={handleTaskSubmit}>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex-1'>
            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-3 block'>Task Name</label>
            <input className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-4 w-full' placeholder='Task Name' name='name' type='text' />
          </div>
          <div className='flex-1'>
            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-3 block'>Priority</label>
            <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-4 w-full' placeholder='Priority' name='Priority' type='select'>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex-1'>
            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-3 block'>Status</label>
            <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-4 w-full' placeholder='Status' name='Status' type='select'>
              <option value="Open">Open</option>
              <option value="Process">Process</option>
              <option value="Cancel">Cancel</option>
              <option value="Close">Close</option>
            </select>
          </div>
          <div className='flex-1'>
            <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-3 block'>Type</label>
            <select className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-4 w-full' placeholder='Type' name='Type' type='Type'>
              <option value="Open">Development</option>
              <option value="Process">Bug</option>
              <option value="Cancel">Error</option>
            </select>
          </div>
        </div>

        <label className='text-lg font-normal text-black1 mb-1 ml-1 mt-3 block'>Description</label>
        <textarea className='text-base placeholder:text-textColor bg-sectionbg rounded-lg border duration-300 focus:bg-white focus:shadow-sm focus:border focus:border-primery outline-none py-3 px-4 w-full' placeholder='Write you task description' name='description' type='text'> </textarea>
        <div>

        </div>
        <button className='text-lg px-10 py-[14px] bg-primery hover:bg-hover rounded-lg text-white mt-5 w-full inline-block duration-300' >
          {
            loading ? <ImSpinner9 className='animate-spin text-center inline-block text-3xl'> </ImSpinner9> : <span>Submit</span>
          }
        </button>

      </form>
    </div>
  )
}

export default AddTask