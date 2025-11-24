import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li><NavLink to="/" className="text-white hover:text-rose-600 transition m-2">Home</NavLink></li>
      <li><NavLink to="/about" className="text-white hover:text-rose-600 transition m-2">About</NavLink></li>
      <li><NavLink to="/contact" className="text-white hover:text-rose-600 transition m-2">Contact</NavLink></li>
      <li><NavLink to="/myProfile" className="text-white hover:text-rose-600 transition m-2">My Profile</NavLink></li>
    </>
  );

  return (
    <nav className='flex justify-between items-center md:px-24 px-6 bg-black/90  py-4 '>
      <div className='flex items-center gap-2'> 
        <FaCode size={28} className='text-rose-500'></FaCode>
        <h3 className='md:text-2xl text-xl font-bold text-rose-500'> Junayed Khan</h3>
      </div>

      <div className='relative'>
        {/* desktop view */}
        <ul className='hidden md:flex gap-6 list-none'>
          {links}
        </ul>

        {/* mobile view */}
        <div className='md:hidden flex'>
          <button
            onClick={() => setOpen(!open)}
            className='p-2 rounded-md bg-rose-500 text-white focus:outline-none'
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* slide menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-rose-300 shadow-2xl transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
        >
          <div className='flex justify-between items-center p-4 border-b'>
            <h2 className='text-lg font-semibold text-white'>Menu</h2>
            <button onClick={() => setOpen(false)} className='text-rose-600'>
              <X size={22} />
            </button>
          </div>

          <ul className='flex flex-col p-6 gap-4 list-none'>
            {links}
          </ul>
        </div>

        {/* overlay */}
        {open && (
          <div
            className='fixed inset-0 bg-black opacity-40 z-30 md:hidden'
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
