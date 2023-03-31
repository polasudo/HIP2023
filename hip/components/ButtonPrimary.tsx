import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

const ButtonPrimary = ({path, text, color}: any) => {
    return (
        <button className='text-white m-4 p-4 rounded-xl' style={{backgroundColor: color}}>
            <Link href={path}>{text}</Link>
        </button>
    )
}

export default ButtonPrimary