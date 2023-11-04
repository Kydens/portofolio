import Link from 'next/link'
import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

    return (
        <>
            <div className='hidden lg:flex fixed hover:left-0 hover:transition-all transition-all left-[-120px] h-full w-max'>
                <div className='h-full w-[120px] bg-emerald-600 text-slate-900 font-semibold flex flex-col items-center gap-y-5 py-8'>
                    <Link href={'/'} className='text-[#e7e4dc]'>Home</Link>
                    <Link href={'/about'} className='text-[#e7e4dc] hover:text-[#f1f1f1]'>About</Link>
                    <Link href={'/experience'} className='text-[#e7e4dc] hover:text-[#f1f1f1]'>Experience</Link>
                    <Link href={'/projects'} className='text-[#e7e4dc] hover:text-[#f1f1f1]'>Project</Link>
                    <Link href={'/skills'} className='text-[#e7e4dc] hover:text-[#f1f1f1]'>Skills</Link>
                </div>
                <div className='h-full w-[40px] flex items-center justify-center text-black scale-x-[-1]'>
                    <BsArrowBarLeft size={28} className={'animate-bounce'} />
                </div>
            </div>
            <main className='h-screen overflow-hidden'>
                {children}
            </main>
        </>
    )
}

export default Sidebar