import React from 'react'
const ServiceCard = ({service}) => {
    const {title, description, icon:Icon, bgcolor}=service
  return (
    <div className={`bg-[${bgcolor}] rounded-lg`}>
       <Icon size={40} />           
    <h1 className='text-2xl font-semibold text-text my-2'>{title}</h1>
    <p className='flex-1 text-base font-normal text-text'>{description}</p>
</div>
  )
}
export default ServiceCard