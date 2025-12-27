import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => { 
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li><NavLink to="/" className="text-white hover:text-cyan-400 transition m-2">Home</NavLink></li>
      <li><NavLink to="/" className="text-white hover:text-cyan-400 transition m-2">About</NavLink></li>
      <li><NavLink to="/blogs" className="text-white hover:text-cyan-400 transition m-2">Blog</NavLink></li>
      <li><NavLink to="/" className="text-white hover:text-cyan-400 transition m-2">Contact</NavLink></li>
    </>
  );

  return (
    <nav className='flex justify-between items-center md:px-24 px-6 bg-[#000c16]
 backdrop-blur-md py-4  w-full top-0  shadow-lg'>
      {/* Logo */}
      <Link to="/">
      <div className='flex items-center gap-2'> 
        <FaCode size={28} className='text-cyan-400' />
        <h3 className='md:text-2xl text-xl font-bold text-cyan-400'> Junayed Khan</h3>
      </div>
      </Link>

      <div className='relative'>
        {/* Desktop Links */}
        <ul className='hidden md:flex gap-6 list-none'>
          {links}
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden flex'>
          <button
            onClick={() => setOpen(!open)}
            className='p-2 rounded-md bg-cyan-400 text-white focus:outline-none'
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-full bg-cyan-400/90 backdrop-blur-md shadow-2xl transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
        >
          <div className='flex justify-between items-center p-4 border-b border-cyan-900'>
            <h2 className='text-lg font-semibold text-white '>Menu</h2>
            <button onClick={() => setOpen(false)} className='text-white'>
              <X size={22} />
            </button>
          </div>

          <ul className='flex flex-col bg-cyan-400/90 p-6 gap-4 list-none'>
            {links}
          </ul>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className='fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden'
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
