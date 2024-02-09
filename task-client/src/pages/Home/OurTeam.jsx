import React from 'react'
import Container from '../../components/Shared/Container'

const OurTeam = () => {
    const teams = [
        {
          title: "Seniors",
          name: "Dr. Eleanor Mitchell",
          photo: "https://micronet.work/demo/wp-content/uploads/avatars/6/popsada-bpthumb.jpg",
          subTitle: "Design",
          color: "#9f0ee1"
        },
        {
          title: "Interns",
          name: "Alex Turner",
          photo: "https://micronet.work/demo/wp-content/uploads/avatars/2/wewew-bpthumb.jpg",
          subTitle: "Tech Enthusiasm",
          color:"#6eb49a"
        },
        {
          title: "Employees",
          name: "Sarah Johnson",
          photo: "https://micronet.work/demo/wp-content/uploads/avatars/3/rrrerer-bpthumb.jpg",
          subTitle: "Management",
          color: "#a6e981"
        },
        {
          title: "Clients",
          name: "Mr. Richard Anderson",
          photo: "https://micronet.work/demo/wp-content/uploads/avatars/1/manger_thumb-bpthumb.jpg",
          subTitle: "Finance",
          color: "#ffdb29"
        }

      ];
      
    return (
        <div className='bg-sectionbg py-10 mt-10'>
            <Container>
                <div>
                    <h1 className='text-4xl font-bold text-black mb-4'>Our Recent team members</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-6'>
                      {
                        teams.map((team, index)=> <div className='border border-neutral-300 rounded-md'>
                          <img className='rounded-t-md w-full' src={team.photo} alt="" />
                         <div className=' p-5 pt-2'>
                         <h1 className='text-base font-medium text-black '>{team.title}</h1>
                          <h1 className='text-2xl font-semibold text-black mb-2'>{team.name}</h1>
                          <h2 style={{ backgroundColor: team.color }} className='px-3 py-1 text-base font-medium text-white inline-block rounded-full'>{team.subTitle}</h2>
                         </div>
                          </div>)
                      }

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default OurTeam