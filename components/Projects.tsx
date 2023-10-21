'use client'
import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Swipe from 'react-easy-swipe';
import Image from 'next/image';
import { cat, killua, profile } from '@/assets';

interface ProjectsProps {
    style: string;
}

const Projects: React.FC<ProjectsProps> = ({ style }) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 0,
            slide: profile
        },
        {
            id: 1,
            slide: cat
        },
        {
            id: 2,
            slide: killua
        }
    ]

    const handleNextSlide = () => {
        let newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    const handlePrevSlide = () => {
        let newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    }

    return (
        <div className={`
            flex flex-col h-full w-full py-32
            ${style}
        `}>
            <h1 className='flex justify-center text-2xl font-extrabold'>Projects</h1>
            <div className='flex flex-row h-full w-full items-center lg:px-32'>
                <AiOutlineLeft
                    onClick={handlePrevSlide}
                    className='text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20'
                />
                <div className="w-full h-[50vh] flex flex-col overflow-hidden items-center m-auto">
                    <Swipe
                        onSwipeLeft={handleNextSlide}
                        onSwipeRight={handlePrevSlide}
                        className='relative z-10 w-full h-full'
                    >
                        {slides.map((slides, index) => {
                            if (index === currentSlide) {
                                return (
                                    <Image
                                        key={slides.id}
                                        src={slides.slide}
                                        alt='Project'
                                        layout='fill'
                                        objectFit='contain'
                                        className='animate-fade'
                                    />
                                )
                            }
                        })}
                    </Swipe>

                    <div className="relative flex justify-center p-2">
                        {slides.map((_, index) => {
                            return (
                                <div
                                    className={
                                        index === currentSlide
                                            ? 'h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer'
                                            : 'h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer'
                                    }
                                    key={index}
                                    onClick={() => {
                                        setCurrentSlide(index);
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
                <AiOutlineRight
                    onClick={handleNextSlide}
                    className='m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 x-20'
                />


            </div>
        </div>
    )
}

export default Projects