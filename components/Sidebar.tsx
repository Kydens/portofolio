import React from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {

    return (
        <div className='h-full flex'>
            <div className='hidden lg:flex fixed hover:left-0 hover:transition-all transition-all left-[-100px] h-full w-max'>
                <div className='h-full w-[100px] bg-slate-900 flex flex-col items-center gap-y-5 py-5'>
                    <p>Home</p>
                    <p>About</p>
                    <p>Experience</p>
                    <p>Project</p>
                    <p>Language</p>
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