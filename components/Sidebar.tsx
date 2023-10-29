import Link from 'next/link'
import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

    return (
        <div className='h-full flex'>
            <div className='hidden lg:flex fixed hover:left-0 hover:transition-all transition-all left-[-100px] h-full w-max'>
                <div className='h-full w-[100px] bg-emerald-600 text-slate-900 font-bold flex flex-col items-center gap-y-5 py-8'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>About</Link>
                    <Link href={'/'}>Experience</Link>
                    <Link href={'/'}>Project</Link>
                    <Link href={'/'}>Skills</Link>
                </div>
                <div className='h-full w-[40px] flex items-center justify-center text-black scale-x-[-1]'>
                    <BsArrowBarLeft size={28} />
                </div>
            </div>
            <main className='h-screen overflow-hidden'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar