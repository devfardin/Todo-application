import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md'
import UpdateTask from '../UpdateTask/UpdateTask'
import { BiEditAlt } from "react-icons/bi";
import Swal from 'sweetalert2'
import useGetDate from '../../../hooks/useGetDate';
import { taskDelete } from '../../../Apis/GetMethod'
import axiosSecure from '../../../Apis';

const UpdateDelete = ({ task }) => {
    const [openModal, setOpenModal] = useState(false)
    const [refetch,data, isPending]=useGetDate()

   const taskDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
           axiosSecure.delete(`/taskdelete/${id}`)
          .then(()=>{
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch()
          })
        }
      });
   }
    return (

        <div>
            <div className='flex gap-x-3'>
                <button onClick={()=> setOpenModal(true)} className="p-2 cursor-pointer bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Edit Survery">  <BiEditAlt className='text-xl  text-primery' />
                </button>
                <button onClick={() =>taskDelete(task._id) } className="p-2 bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Delete Survery">
                    <MdDelete className='text-xl  text-primery'> </MdDelete>
                </button>
            </div>
            <UpdateTask task={task} openModal={openModal} setOpenModal={setOpenModal} />
        </div>
    )
}

export default UpdateDelete