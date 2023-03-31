import React from 'react'
import Image from 'next/image';
import ButtonPrimary from '../components/ButtonPrimary';

function checkpoint2() {
    return (
        <>
            <div className="text-white h-screen bg-black justify-center grid justify-items-center">
                <div className='justify-center grid justify-items-center mt-20'>
                    <div>
                        <h1 className="m-auto font-waterfall text-3xl text-purple-600 font-bold ">
                            Checkpoint 2
                        </h1>
                    </div>
                    <div>
                        <Image
                            src="/logo.svg"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
                <div>
                    <ButtonPrimary path='/about' text="info" color="grey" />
                    <ButtonPrimary path='/' text="End of navigation" color="red"/>
                </div>
                
            </div>


        </>
    )
}

export default checkpoint2