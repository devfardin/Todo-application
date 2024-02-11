import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import Title from '../../../components/Shared/Title&Pluse/Title';
import AddTask from '../AddTask/AddTask';
import { BsDash } from "react-icons/bs";
import { IoArrowUpSharp, IoArrowDown } from "react-icons/io5";
import Loader from '../../../components/Shared/Loader';
import { useQuery} from '@tanstack/react-query'
import UpdateDelete from '../../../components/Shared/Update&Delete/UpdateDelete';
import useGetDate from '../../../hooks/useGetDate';

const MyTaskes = () => {
  const { user } = useAuth()
  const [,data, isPending]=useGetDate()
const totalTask= data?.length
  return (
    <div className='w-full'>
      <Title title="All Tasks" totalTask={totalTask}/>
      {
        isPending ? <Loader /> :
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
            {
              data?.map((task) => <div className='flex flex-col justify-between border border-neutral-600 rounded-md p-4  bg-neutral-700'>
                <div>
                <h1 className="text-[22px] font-medium text-neutral-100">{task.title}</h1>
                <p className='text-[17px] font-medium text-neutral-200 mt-1'>{task.descriptions}</p>

                <div className='flex items-center justify-between gap-2 mb-2 mt-2'>
                  <h1 className='text-neutral-100 font-medium text-lg'>{task?.date}</h1>
                  {
                    task.priority == 'High' ? <span className='text-lg font-medium text-[#F9683A] rounded-full inline-block '>{<h1 className='flex items-center gap-1 text-lg'><IoArrowUpSharp className='text-lg' />{task.priority}</h1>}</span> : task.priority == 'Low' ?
                      <span className='text-lg font-medium  text-[#0BC53A] rounded-full inline-block '>{<h1 className='flex items-center gap-1 text-lg'><IoArrowDown className='text-lg'/>{task.priority}</h1>}</span> : <span className='text-lg font-medium text-neutral-300 rounded-full inline-block '>{<h1 className='flex items-center gap-1 text-lg'><BsDash className='text-lg' />{task.priority}</h1>}</span>
                  }
                </div>
                </div>
                <div className='flex items-center gap-10 !justify-between mb-2 mt-1'>
                  {
                    task.status == 'Close' ? <span className='text-base font-medium bg-[#FDDCE3] text-[#F11541] px-4 rounded-full text-center py-1 inline-block '>{task.status}</span> : task.status == 'Process' ?
                      <span className='text-base bg-[#DDEDE6] font-medium text-#198754 px-4 rounded-full text-center py-1 inline-block  '>{task.status}</span> : <span className='text-base bg-[#68AF66] font-medium text-neutral-100 px-4 rounded-full text-center py-1 inline-block '>{task.status}</span>
                  }
                 <UpdateDelete task={task}/>
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