import React from 'react'
import Loader from '../../../components/Shared/Loader'
import { LiaEdit } from 'react-icons/lia';
import { BsEye } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const MyTask = ({ task, loading }) => {
    const { _id, title, deadline, time, priority, descriptions, type, status } = task

    // Close color Bg, text='#FDDCE3', '#F11541'
    // Process color Bg, text='#DDEDE6', '#198754'
    return (
        <tr className='border-b py-10  border-sectionbg'>
            <td>
                <div className="flex items-center space-x-4">
                    <div>
                        <div className="text-lg font-normal text-black1">{title}</div>
                        <div className='flex gap-3'>
                            <span className='text-base text-textColor font-normal '>
                                {deadline}
                            </span>
                        </div>
                    </div>
                </div>
            </td>

            <td className='text-base text-textColor font-normal'>
                <div className='flex gap-1'>
                    {
                        status == 'Close' ? <span className='text-sm font-medium bg-[#FDDCE3] text-[#F11541] px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> : status== 'Process' ?
                            <span className='text-sm bg-[#DDEDE6] text-#198754 px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> :  <span className='text-sm bg-primery text-neutral-100 px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span>
                    }

                </div>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal'>{type}</h1>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal'>{time}</h1>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal'>{priority}</h1>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal'>{descriptions}</h1>
            </td>
            <th>
               

            </th>
        </tr>



    )
}

export default MyTask