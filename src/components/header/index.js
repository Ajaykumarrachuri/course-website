import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Navbar from '../navbar';

const Header = () => {

    const [top, setTop] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    const handleScroll = () => {
        window.scrollY ? setTop(false) : setTop(true);
    }


    return (
        <div className={classnames('sticky top-0 z-40 h-20 bg-background-primary border-b border-opacity-0 transition-all duration-500 ease-in-out', {
            'bg-white border-solid border-border-primary': !top
        })}>
            <Navbar />
        </div >
    )
}

export default Header
