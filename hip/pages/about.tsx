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
                className="text-white h-screen bg-gray-400  text-center flex"
            >
                <h1 className="m-auto font-waterfall text-xl text-white font-bold  ">
                    to get more information about this app just click on alanBtn and ask:
                    <br />what is this app about?
                    <br />
                    to start navigation ask like this: <br /><p className='text-red-600'>navigate me to class (number of class)</p>
                    <ButtonPrimary path='/checkpoint1' text="navigate to 147" color="green" /><br />
                    <button className='text-white bg-purple-600 m-3 p-3 rounded-xl' onClick={() => {
                        alanBtnRef.btnInstance.playText("you need to start from the reception, go upstairs to the first floor then turn left, and from there go for 11th door on right inside of hallway");
                    }}>navigation to class 147</button>
                </h1>
            </section>
        </div>
    )
}

export default about