import type { NextPage } from 'next'
import { useEffect, useRef } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';

type alanBtnRef = {
  btnInstance?: any
}

const Home: NextPage = () => {
  const alanBtnRef:alanBtnRef = useRef({}).current;
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
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-3xl text-purple-600 font-bold ">
          Say hello to navigation AI to get more information click About in menu <br />or click button to navigate
          <br />
          <ButtonPrimary path='/about' text="info" color="grey" /><br />
          <button className='text-white bg-purple-600 m-5 p-5 rounded-xl' onClick={() => {
            alanBtnRef.btnInstance.playText("you need to start from reception go upstairs on the first floor and from the stairs go to the left, and from there go for 6th door on right");
          }}>navigation to class 147</button>
        </h1>
      </section>
    </div>
  )
}

export default Home
