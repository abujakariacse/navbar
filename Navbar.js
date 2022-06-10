import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    let links = [
        { name: 'HOME', link: '/' },
        { name: 'ABOUT', link: '/' },
        { name: 'SERVICE', link: '/' },
        { name: 'BLOGS', link: '/' },
        { name: 'CONTACT', link: '/' }
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='flex font-bold cursor-pointer text-2xl items-center text-gray-800'>
                    <span className='text-4xl mr-1 pt-2'>
                        <i className="fa-brands fa-apple"></i>
                    </span>
                    Apple
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <i className={`${open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        links.map(link => <li
                            className='md:ml-8 text-lg font-semibold md:my-0 my-5'
                            key={link.name}>
                            <Link className='text-black hover:text-gray-500 duration-500' to={link.link}>{link.name}</Link>
                        </li>)
                    }
                    <Button>Get Started</Button>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;