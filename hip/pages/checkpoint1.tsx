import React from 'react'
import Image from 'next/image';

function checkpoint1() {
    return (
        <>
            <div className='bg-black h-screen text-white text-center flex'>
                
                <Image
                    src="/logo.svg"
                    width={100}
                    height={100}
                />
                <h1 className="m-auto font-waterfall text-3xl text-white font-bold">
                    Checkpoint 1
                </h1>
            </div>
        </>
    )
}

export default checkpoint1