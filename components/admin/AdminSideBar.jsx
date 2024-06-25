"use client";

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

function AdminSideBar() {
  const pathname = usePathname();
  const router = useRouter();
  const { aboutMe } = useSelector(state => state.layout);

  return (
    <div className='w-full h-full border-r-2 border-cyan-300 rounded-r-xl p-4'>
      <div className="pt-2">
        <img
          onClick={() => router.replace('/')}
          src={aboutMe?.image}
          alt="ksl"
          className="mx-auto rounded-full w-40 h-40 overflow-hidden shadow-xl object-cover cursor-pointer"
        />

        <h1 className='text-center font-bold mt-4 text-2xl'>Dashboard</h1>
      </div>

      <div className='my-4 space-y-4'>
        <Link href={'/admin'} className={`sideBarButton ${pathname == '/admin' && 'bg-cyan-300'}`}>
          Layout
        </Link>

        <Link href={'/admin/services'} className={`sideBarButton ${pathname == '/admin/services' && 'bg-cyan-300'}`}>
          Services
        </Link>

        <Link href={'/admin/projects'} className={`sideBarButton ${pathname == '/admin/projects' && 'bg-cyan-300'}`}>
          Projects
        </Link>

        <Link href={'/admin/certificates'} className={`sideBarButton ${pathname == '/admin/certificates' && 'bg-cyan-300'}`}>
          Certificates
        </Link>

        <Link href={'/admin/messages'} className={`sideBarButton ${pathname == '/admin/messages' && 'bg-cyan-300'}`}>
          Messages
        </Link>
      </div>
    </div>
  )
}

export default AdminSideBar