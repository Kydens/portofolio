import React from 'react'
interface HomepageProps {
    style: string;
}

const Homepage: React.FC<HomepageProps> = ({ style }) => {
    return (
        <div className={`
            flex flex-col w-full h-full justify-center
            ${style}
        `}>
            <p className='text-center'>I am Eddy Nathansyah</p>
            <p className='text-center'>Developer Website</p>
        </div >
    )
}

export default Homepage