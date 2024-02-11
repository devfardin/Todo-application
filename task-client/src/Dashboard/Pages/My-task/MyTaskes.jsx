import React, { useEffect, useState } from 'react'
import { getTask } from '../../../Apis/GetMethod'
import useAuth from '../../../hooks/useAuth'
import MyTask from './MyTask'
import styled from 'styled-components';
import Title from '../../../components/Shared/Title&Pluse/Title';
import { MdAddTask } from 'react-icons/md';
import AddTask from '../AddTask/AddTask';
import { BsDash } from "react-icons/bs";
import { IoArrowUpSharp, IoArrowDown } from "react-icons/io5";
import Loader from '../../../components/Shared/Loader';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { LiaEdit } from 'react-icons/lia';
import { MdDelete } from "react-icons/md";


const MyTaskes = () => {
  const [loading, setLoading] = useState(false)
  const [allTask, setALllTask] = useState([])
  const { user } = useAuth()
  useEffect(() => {
    setLoading(true)
    getTask(user?.email)
      .then((data) => {
        setALllTask(data)
        setLoading(false)
      })
  }, [user])

  return (
    <div className='w-full'>
      <Title title="All Tasks" />
      {
        loading ? <Loader /> :
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {
              allTask.map((task) => <div className='border border-neutral-600 rounded-md p-4  bg-neutral-700'>
                <h1 className="text-2xl font-medium text-neutral-100">{task.title}</h1>
                <p className='text-lg font-medium text-neutral-200 mt-1'>{task.descriptions}</p>

                <div className='flex items-center justify-between gap-2 my-2'>
                  <h1 className='text-neutral-100 font-medium text-xl'>Date</h1>
                  {
                    task.priority == 'High' ? <span className='text-lg font-medium text-[#F9683A] rounded-full inline-block '>{<h1 className='flex items-center gap-1 text-xl'><IoArrowUpSharp className='text-xl' />{task.priority}</h1>}</span> : task.priority == 'Low' ?
                      <span className='text-lg font-medium  text-[#0BC53A] rounded-full inline-block '>{<h1 className='flex items-center gap-1 text-xl'><IoArrowDown className='text-xl' />{task.priority}</h1>}</span> : <span className='text-lg font-medium text-neutral-300 rounded-full inline-block '>{<h1 className='flex items-center gap-1 text-xl'><BsDash className='text-xl' />{task.priority}</h1>}</span>
                  }
                </div>

                <div className='flex items-center gap-2 justify-between mb-2 mt-3'>

                  {
                    task.status == 'Close' ? <span className='text-lg font-medium bg-[#FDDCE3] text-[#F11541] px-4 rounded-full text-center py-1 inline-block '>{task.status}</span> : task.status == 'Process' ?
                      <span className='text-lg bg-[#DDEDE6] font-medium text-#198754 px-4 rounded-full text-center py-1 inline-block  '>{task.status}</span> : <span className='text-lg bg-[#68AF66] font-medium text-neutral-100 px-4 rounded-full text-center py-1 inline-block '>{task.status}</span>
                  }

                  <div className='flex gap-x-3'>
                    <Link to={`/dashboard/updateservery/${task._id}`} className="p-2 bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Edit Survery">  <LiaEdit className='text-2xl  text-primery'> </LiaEdit>
                    </Link>

                    <button onClick={() => handleDelete(task._id)} className="p-2 bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Delete Survery">
                      <MdDelete className='text-2xl  text-primery'> </MdDelete>
                    </button>

                  </div>
                </div>
              </div>)
            }
            <AddTask />
            <div>
            </div>
          </div>
      }
    </div>
  )
}

export default MyTaskes