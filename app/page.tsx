'use client'
import Link from "next/link"
import Typewriter from 'typewriter-effect';
import { AiOutlineMail } from "react-icons/ai"

export default function Home() {

  return (
    <div className={`
            w-full h-full 
            bg-gradient-to-b from-[#e7e4dc] from-90% to-[#e3ebee] to-100% text-black
        `}>
      <Link href={'mailto:nathsyahed@gmail.com'}
        className='flex items-center sticky right-0 px-7 py-5 font-bold w-full bg-emerald-600
                    lg:w-fit lg:bg-opacity-0 lg:fixed
                    animate-bounce
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
