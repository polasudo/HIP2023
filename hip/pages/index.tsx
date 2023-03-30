import type { NextPage } from 'next'
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    alanBtn({
      key: 'YOUR_KEY_FROM_ALAN_STUDIO_HERE',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          // Call the client code that will react to the received command
        }
      }
    });
  }, []);
  
  return (
    <div>
      <section
        id="about"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold  ">
          About
        </h1>
      </section>
      <section id="blog" className=" text-white h-screen bg-purple-900 flex">
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Blog
        </h1>
      </section>
      <section
        id="contact"
        className="text-white h-screen bg-black  text-center flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-purple-600 font-bold">
          Contact{' '}
        </h1>
      </section>
      <section
        id="projects"
        className=" text-white h-screen bg-purple-900 flex"
      >
        <h1 className="m-auto font-waterfall text-7xl text-white font-bold">
          Projects
        </h1>
      </section>
    </div>
  )
}

export default Home
