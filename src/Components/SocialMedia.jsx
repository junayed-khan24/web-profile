import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const SocialMedia = () => {
    return (
        <div className='flex gap-4 md:gap-5 items-center md:justify-start justify-center'>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <Link to="https://github.com/junayed-khan24"><FaGithub className='text-gray-600' size={24}></FaGithub></Link>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <Link to="/"><FaLinkedin size={24} className='text-gray-600'></FaLinkedin></Link>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <FaXTwitter className='text-gray-600' size={24}></FaXTwitter>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <FaInstagram className='text-gray-600' size={24}></FaInstagram>
            </div>
            <div className='p-2 border border-gray-600 bg-black  rounded-full hover:animate-pulse'>
                <Link to="https://www.facebook.com/md.junayed.khan.162210"><FaFacebook size={24} className='text-gray-600'></FaFacebook></Link>
            </div>
        </div>
    );
};

export default SocialMedia;