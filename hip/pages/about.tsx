import React, { useEffect, useRef } from 'react'
import ButtonPrimary from '../components/ButtonPrimary'

type alanBtnRef = {
    btnInstance?: any
}


const about = () => {
    const alanBtnRef: alanBtnRef = useRef({}).current;
    useEffect(() => {
        const alanBtn = require('@alan-ai/alan-sdk-web');
        alanBtnRef.btnInstance = alanBtn({
            key: process.env.NEXT_PUBLIC_API_KEY,
        });
    }, []);
    
    return (
        <div>
            <section
                id="about"
                className="text-white h-screen bg-slate-500  text-center flex"
            >
                <h1 className="m-auto font-waterfall text-3xl text-white font-bold  ">
                    to get more information about this app just click on alanBtn and ask:
                    <br />what is this app about?
                    <br />
                    to start navigation ask like this: <br /><p className='text-red-600'>navigate me to class (number of class)</p>
                    <ButtonPrimary path='/checkpoint1' text="navigate to 147" color="green" /><br />
                    <button className='text-white bg-purple-600 m-5 p-5 rounded-xl' onClick={() => {
                        alanBtnRef.btnInstance.playText("you need to start from reception go upstairs on the first floor and from the stairs go to the left, and from there go for 6th door on right");
                    }}>navigation to class 147</button>
                </h1>
            </section>
        </div>
    )
}

export default about