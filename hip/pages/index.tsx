import type { NextPage } from 'next'
import { useEffect } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';

const Home: NextPage = () => {
  useEffect(() => {
    const alanBtn = require('@alan-ai/alan-sdk-web');
    alanBtn({
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
        </h1>
      </section>
    </div>
  )
}

export default Home
