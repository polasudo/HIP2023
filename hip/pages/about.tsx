import React from 'react'
import ButtonPrimary from '../components/ButtonPrimary'

const about = () => {
    return (
        <div>
            <section
                id="about"
                className="text-white h-screen bg-black  text-center flex"
            >
                <h1 className="m-auto font-waterfall text-3xl text-purple-600 font-bold  ">
                    to get more information about this app just click on alanBtn and ask:
                    <br />what is this app about?
                    <br />
                    to start navigation ask like this: <br /><p className='text-red-600'>navigate me to class (number of class)</p>
                    <ButtonPrimary path='/checkpoint1' text="navigate to 147" color="green" /><br />
                </h1>
            </section>
        </div>
    )
}

export default about