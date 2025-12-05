import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const SocialMedia = () => {
    return (
        <div className='flex gap-4 md:gap-5 items-center md:justify-start justify-center'>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse hover:border-rose-500 hover:bg-rose-500 text-gray-600 hover:text-black'>
                <Link to="https://github.com/junayed-khan24"><FaGithub  size={24}></FaGithub></Link>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse  hover:bg-rose-500 text-gray-600 hover:text-black hover:border-rose-500'>
                <Link to="/"><FaLinkedin size={24}></FaLinkedin></Link>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse  hover:bg-rose-500 text-gray-600 hover:text-black hover:border-rose-500'>
                <FaXTwitter size={24}></FaXTwitter>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse text-gray-600 hover:bg-rose-500 hover:text-black hover:border-rose-500'>
                <FaInstagram  size={24}></FaInstagram>
            </div>
            <div className='p-2 border border-gray-600 bg-black  hover:bg-rose-500 hover:border-rose-500 text-gray-600 hover:text-black rounded-full '>
                <Link to="https://www.facebook.com/md.junayed.khan.162210"><FaFacebook size={24} ></FaFacebook></Link>
            </div>
        </div>
    );
};

export default SocialMedia;