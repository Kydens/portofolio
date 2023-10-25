import React from 'react'
interface ExperienceProps {
    style: string;
}

const Experience: React.FC<ExperienceProps> = ({ style }) => {
    return (
        <>
            {/* Mobile View */}
            <div className={`
                lg:hidden w-full h-full flex flex-col items-center px-10 justify-center
                ${style}
            `}>
                <div className='mb-5'>
                    <h2 className='text-2xl font-extrabold'>Experience</h2>
                </div>
                <table className='table-fixed w-full h-1/2'>
                    <tbody>
                        <tr>
                            <td className='border-r-2 px-5 border-black'>
                                <h2 className='font-extrabold text-right'>Panitia Dies Natalis - UKM Mapala (Unviersitas Tarumanagara)</h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='border-r-2 px-5 border-black'></td>
                            <td className='px-5'>
                                <h2 className='font-extrabold text-left'>Panitia Rapat Rimba - UKM Mapala (Unviersitas Tarumanagara)</h2>
                            </td>
                        </tr>
                        <tr>
                            <td className='border-r-2 px-5 border-black'>
                                <h2 className='font-extrabold text-right'>Part Time (PT. Bintang Saudara)</h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* View up to 1024px */}
            <div className={`
                hidden lg:flex w-full h-full flex-col items-center px-10 justify-center
                ${style}
            `}>
                <div className='mb-5'>
                    <h2 className='text-2xl font-extrabold'>Experience</h2>
                </div >
                <table className='table-fixed w-1/2 h-1/2'>
                    <tbody>
                        <tr>
                            <td className='border-r-2 px-5 border-black'>
                                <h2 className='font-extrabold text-right'>Part Time - Bintang Saudara</h2>
                                <p className='text-right'>Mampu mengelola waktu dengan baik, disiplin dan rajin sehingga bisa menghasilkan pelayanan dan kinerja yang baik.</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='border-r-2 px-5 border-black'></td>
                            <td className='px-5'>
                                <h2 className='font-extrabold text-left'>Panitia Rapat Rimba - UKM Mapala (Unviersitas Tarumanagara)</h2>
                                <p className='text-left'>Memiliki time management yang baik dalam membangun sebuah kerja sama tim serta bertanggung jawab dalam melakukan tugas yang diberikan.</p>
                            </td>
                        </tr>
                        <tr>
                            <td className='border-r-2 px-5 border-black'>
                                <h2 className='font-extrabold text-right'>Panitia Dies Natalis - UKM Mapala (Unviersitas Tarumanagara)</h2>
                                <p className='text-right'>Mampu mengatur tim divisi dengan baik dan menjaga semua acara sesuai dengan rundown.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default Experience