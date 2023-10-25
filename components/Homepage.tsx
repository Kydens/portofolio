import React from 'react'
interface HomepageProps {
    style: string;
}

const Homepage: React.FC<HomepageProps> = ({ style }) => {

    return (
        <div className={`
            flex flex-col w-full h-full justify-center
            text-xl font-bold
            ${style}
        `}>
            <p className='text-center'>I am Eddy Nathansyah</p>
            <p className='text-center'>Frontend Developer</p>
        </div >
    )
}

export default Homepage