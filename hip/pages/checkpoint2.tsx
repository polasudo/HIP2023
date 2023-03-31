import React, { useEffect, useRef } from 'react'
import Image from 'next/image';
import ButtonPrimary from '../components/ButtonPrimary';

type alanBtnRef = {
    btnInstance?: any
}

function checkpoint2() {
    const alanBtnRef: alanBtnRef = useRef({}).current;
    useEffect(() => {
        const alanBtn = require('@alan-ai/alan-sdk-web');
        alanBtnRef.btnInstance = alanBtn({
            key: process.env.NEXT_PUBLIC_API_KEY,
        });
    }, []);


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
                    <ButtonPrimary path='/' text="End of navigation" color="red" />
                    <button className='text-white bg-purple-600 m-5 p-5 rounded-xl' onClick={() => {
                        alanBtnRef.btnInstance.playText("turn left from stars and step to the begining of the hallway and from there go to the sixth door from the begining");
                    }}>navigation to class 147 from 1st checkpoint</button>
                </div>

            </div>


        </>
    )
}

export default checkpoint2