import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

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
        <div className={classnames('sticky top-0 z-50 h-20 bg-background-primary transition-all duration-500 ease-in-out', {
            'bg-white border-b border-solid border-border-primary': !top
        })}>
            {/* Navbar */}
        </div >
    )
}

export default Header
