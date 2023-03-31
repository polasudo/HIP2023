import React from 'react'
import Image from 'next/image';
import ButtonPrimary from '../components/ButtonPrimary';

function checkpoint1() {
    return (
        <>
            <div className="text-white h-screen bg-black justify-center grid justify-items-center">
                <div className='justify-center grid justify-items-center mt-20'>
                    <div>
                        <h1 className="m-auto font-waterfall text-3xl text-purple-600 font-bold ">
                            Checkpoint 1
                        </h1>
                        <h1 className="m-auto font-waterfall text-xl text-purple-600 font-bold ">
                            to navigate to checkpoint ask for: (navigate me to (#number) checkpoint)
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
                    <ButtonPrimary path='/about' text="back" color="grey" />
                    <ButtonPrimary path='/checkpoint2' text="next checkpoint" color="green"/>
                </div>
                
            </div>


        </>
    )
}

export default checkpoint1