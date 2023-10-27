import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

import profile from '@/assets/profile.jpg'
import { MarkGithubIcon } from '@primer/octicons-react'
import { FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

interface AboutProps {
    style: string;
}

const About: React.FC<AboutProps> = ({ style }) => {
    return (
        <div className={`
            flex flex-row h-screen w-full justify-center items-center
            ${style}
        `}
        >
            <div className='lg:flex w-2/4 gap-x-6'>
                <Image
                    src={profile}
                    alt='Profile image'
                    width={215}
                    className='rounded-full'
                />
                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-2xl my-2'>About Me</p>
                    <p className='text-justify'>I am an ambitious and responsible student. Currently pursuing an undergraduate education at Tarumanegara University majoring in Informatics. I want to be a website developer and usually using Javascript with Tailwind CSS. Also, I able to build communication and work together in a team.</p>
                    <div className='flex flex-row gap-x-3 my-4  '>
                        <Link href={'https://www.github.com/Kydens'} target={'_blank'}><MarkGithubIcon size={24} /></Link>
                        <Link href={'https://www.linkedin.com/in/eddy-nathansyah/'} target={'_blank'}><FaLinkedin size={24} /></Link>
                        <Link href={'https://www.leetcode.com/Kydens/'} target={'_blank'}><SiLeetcode size={24} /></Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About