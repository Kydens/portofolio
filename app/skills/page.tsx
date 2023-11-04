import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import {
    BiLogoTailwindCss,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoFlutter
} from 'react-icons/bi'
import { SiNextdotjs } from 'react-icons/si'

const Skills = () => {
    return (
        <div className={
            `w-full h-full flex justify-center items-center
            bg-gradient-to-t from-[#e7e4dc] from-85% to-[#e3ebee] to-96% text-black
        `}>
            <div className='w-2/4 flex flex-row items-center justify-evenly gap-x-10'>
                <div className='flex flex-col w-1/2 gap-y-5'>
                    <h1 className='font-bold text-4xl text-left'>Programming Skills</h1>
                    <h1 className='font-medium text-lg'>I am Frontend Developer, usually build a frontend webtsite using NextJS and Tailwind as the framework.</h1>
                </div>
                <div className='grid grid-rows-3 grid-flow-col gap-4'>
                    <AiFillHtml5 size={36} />
                    <BiLogoTailwindCss size={36} />
                    <BiLogoJavascript size={36} />
                    <BiLogoReact size={36} />
                    <SiNextdotjs size={36} />
                    <BiLogoFlutter size={36} />
                </div>
            </div>
        </div>
    )
}

export default Skills