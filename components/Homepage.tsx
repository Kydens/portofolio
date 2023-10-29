'use client'
import React from 'react'
import Typewriter from 'typewriter-effect';
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link';
interface HomepageProps {
    style: string;
}

const Homepage: React.FC<HomepageProps> = ({ style }) => {

    return (
        <div className={`
            w-full h-full 
            ${style}
        `}>
            <Link href={'mailto:nathsyahed@gmail.com'}
                className='flex items-center sticky right-0 px-7 py-2 font-bold w-full bg-emerald-600
                    lg:w-fit lg:bg-opacity-0 lg:fixed
                '>
                Contact Me! <AiOutlineMail size={16} />
            </Link>
            <div className='h-full flex flex-col justify-center items-center text-xl font-bold'>
                <p>I am Eddy Nathansyah</p>
                <Typewriter
                    options={{
                        strings: [
                            'Web Developer',
                            'Front-end Developer',
                            'Next.js Developer',
                        ],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
        </div >
    )
}

export default Homepage