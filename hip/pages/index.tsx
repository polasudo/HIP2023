import type { NextPage } from 'next'
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useRef } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';

const Home: NextPage = () => {
  const alanBtnRef = useRef({}).current;
  useEffect(() => {
    alanBtn({
      key: 'da481460ffc0abbaa2ad4dcf8b3e7b6d2e956eca572e1d8b807a3e2338fdd0dc/stage',
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
        </h1>
      </section>
    </div>
  )
}

export default Home
