'use client'
import { usePathname } from 'next/navigation'
import React, { useMemo } from 'react'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathName = usePathname()

    const routes = useMemo(() => {
        {
            label: 'Home'
            href: '/about'
        }
    }, [pathName])

    return (
        <div className='bg-red-500 h-full flex'>
            <div className='hidden lg:flex flex-col h-fit py-4 px-5 gap-y-2'>
                {/* {routes.map((item) => (
                    
                ))} */}
                tes
            </div>
            <main className='h-full'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar