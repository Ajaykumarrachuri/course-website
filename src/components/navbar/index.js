import React from 'react'
import DropDownMenu from '../drop-down-menu'

const Navbar = () => {

    const list = [
        {
            label: 'download1',
            onSelect: () => alert("Download"),
        }, {
            label: 'download2',
            onSelect: () => { },
        }, {
            label: 'download3',
            onSelect: () => { },
        }, {
            label: 'download4',
            onSelect: () => { },
        }, {
            label: 'download5',
            onSelect: () => { },
        },];

    return (
        <div className='h-full mx-6'>
            <div className='flex items-center justify-start h-full px-10'>
                <img src="/vercel.svg" alt="Vercel Logo" className="h-1/3 ml-2 px-4" />
                <DropDownMenu
                    id='Resources'
                    title='Resources'
                    menuList={list}
                    className='w-1/12'
                />
                <DropDownMenu
                    id='Catalog'
                    title='Catalog'
                    menuList={list}
                    className='w-1/12'
                />
                <DropDownMenu
                    id='Business'
                    title='Business'
                    menuList={list}
                    className='w-1/12'
                />
                <DropDownMenu
                    id='Product'
                    title='Product'
                    menuList={list}
                    className='w-1/12'
                />
            </div>
        </div>
    );
}

export default Navbar;