"use client";

import { PROJECTS } from '@/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const ProjectDetail = ({ params }) => {
    const projectId = params?.id;
    const [projectDetail, setProjectDetail] = useState(null);

    const router = useRouter();
    
    useEffect(() => {
      const project = PROJECTS.find(i => i.id === projectId);
      if(project) {
        setProjectDetail(project)
      } else {
        router.push('/404')
      }
    }, [])

  return (
    <div className='w-full h-full flex flex-col md:flex-row gap-4 pt-14 relative'>
      <button onClick={() => router.back()} className='absolute top-2 left-0 actionButton px-6'>
        <FaArrowLeft size={20} />
      </button>

      <div className='w-full md:w-1/2 h-auto'>
        <Image
          width={500}
          height={'auto'}
          className='w-full h-auto border-2 border-cyan-400 rounded-lg'
          src={projectDetail?.img_url}
          alt={projectDetail?.title} 
        />

        <div>
          <h3 className=" font-bold text-[18px]">{projectDetail?.title}</h3>
          <p className=" dark:text-[#00FF00] font-semibold text-[14px]"># {projectDetail?.tag}</p>
        </div>

        <div className='w-full flex items-center justify-between mt-2'>
          <button onClick={() => router.push(projectDetail?.demo_link)} className='actionButton px-6'>
            Demo
          </button>

          <button onClick={() => router.push(projectDetail?.code_link)} className='actionButton px-6'>
            Code
          </button>
        </div>
      </div>

      <div className='w-full md:w-1/2 space-y-2'>
        <div>
          <p className='text-center font-bold text-[18px] underline underline-offset-4'>Description</p>
          <p className='font-medium text-justify dark:text-[#fdeed4]'>{projectDetail?.description}</p>
        </div>
        <div>
          <p className='text-center font-bold text-[18px] underline underline-offset-4'>Role</p>
          <p className='font-medium text-justify dark:text-[#fdeed4]'>{projectDetail?.role}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail