import React, { useEffect, useState } from 'react'
import { getTask } from '../../../Apis/GetMethod'
import useAuth from '../../../hooks/useAuth'
import MyTask from './MyTask'

const MyTaskes = () => {
  const [loading, setLoading]=useState(false)
  const [allTask, setALllTask]=useState([])
  const {user}=useAuth()
  useEffect(()=>{
    getTask(user?.email)
    .then((data)=>{
     setLoading(true)
     setALllTask(data)
     setLoading(false)
    })
  },[user])
  console.log(allTask);
  return (
    <div className='py-10 w-full'>
    <div className=' bg-white'>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className='px-10 w-full'>
            <tr className='bg-[#F5F7FC]'>
              <th className='text-base font-normal text-hover p-3 ml-5'>Title</th>
              <th className='text-base font-normal text-hover p-3 ml-5'>Deadline </th>
              <th className='text-base font-normal text-hover p-3 ml-5'>Status </th>
              <th className='text-base font-normal text-hover p-3 ml-5'>Time</th>
              <th className='text-base font-normal text-hover p-3 ml-5'>priority </th>
              <th className='text-base font-normal text-hover p-3'> descriptions</th>
              <th className='text-base font-normal text-hover p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              allTask.map(task => <MyTask key={task._id} task={task} loading={loading}></MyTask>)
            }

          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default MyTaskes