import React from 'react'
import Container from '../../../components/Shared/Container'
import { DiTrello } from "react-icons/di";
import { VscCommentDiscussion } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import ServiceCard from './ServiceCard';

const Service = () => {
    const services = [
        {
            title: 'Task Management',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            icon: DiTrello,
            bgcolor:"#E3DEFC"
        },
        {
            title: 'Team Collaboration',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            icon: VscCommentDiscussion,
            bgcolor:"#DFFDEC"
        },
        {
            title: 'Project Planning',
            description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            icon: BsGraphUpArrow,
            bgcolor:"#E3DEFC"

        },
    ]
    return (
        <div className='bg-sectionbg py-14'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between gap-4 md:gap-7 mb-6'>
                    <h1 className='flex-1 text-4xl font-semibold text-black '>
                        See how Micronet can help you improve your systems & productivity.
                    </h1>
                    <p className='flex-1 text-lg font-normal text-text'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                    {
                     services.map((service, index) =>  <ServiceCard key={index} service={service}> </ServiceCard>)
                    }
                </div>
            </Container>
        </div>
    )
}

export default Service