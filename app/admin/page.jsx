"use client";

import AboutMe from '@/components/admin/AboutMe';
import BlogInfo from '@/components/admin/BlogInfo';
import ProjectInfo from '@/components/admin/ProjectInfo';
import ServiceInfo from '@/components/admin/ServiceInfo';
import React from 'react'
import { useSelector } from 'react-redux'

function AdminIndex() {
  const { aboutMe, serviceInfo, projectInfo, blogInfo } = useSelector(state => state.layout);
  
  return (
    <div>
      <h1 className='font-semibold text-xl tracking-widest text-center my-4'>General Info</h1>

      <div className='w-full px-10 space-y-4 pb-10'>
        <AboutMe aboutMe={aboutMe} />

        <ServiceInfo serviceInfo={serviceInfo} />

        <ProjectInfo projectInfo={projectInfo} />

        <BlogInfo blogInfo={blogInfo} />
      </div>
    </div>
  )
}

export default AdminIndex