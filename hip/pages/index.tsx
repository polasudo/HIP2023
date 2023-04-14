import type { NextPage } from 'next'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';

type alanBtnRef = {
  btnInstance?: any
}

const Home: NextPage = () => {
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
        <h1 className="m-auto font-waterfall text-xl text-white font-bold ">
          Say hello to navigation AI to get more information click About in menu <br />or click button to navigate
          <br />
          <ButtonPrimary path='/about' text="info" color="grey" /><br />
          <ButtonPrimary path='/checkpoint1' text="checkpoint 1" color="blue" /><br />
          <button className='text-white bg-green-600 m-3 p-3 rounded-xl' onClick={() => {
            alanBtnRef.btnInstance.playText("you need to start from reception go upstairs on the first floor and from the stairs go to the left, and from there go for 6th door on right");
          }}>navigation to class 147</button>
          <br />
          <Image
            className='rounded-xl'
            src="/entry.jpg"
            width={200}
            height={200}
          />
        </h1>
      </section>
    </div>
  )
}

export default Home
