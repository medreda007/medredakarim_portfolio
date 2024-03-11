import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../components/navBar.scss"
import pdf from "../../../assets/files/MedRedaKarim-Resume.pdf"

export const NavBar = () => {
    return (
        <>
            <section className='nav fixed z-20 left-20  w-full flex items-center justify-between ps-10 pe-32 py-5'>
                <div className="icons flex text-2xl gap-x-4 text-gray-400">
                    <a href="" className='hover:text-red-700'>
                        <span><FaLinkedin /></span>
                    </a>
                    <a href="" className='hover:text-red-700'>
                        <span><FaGithub /></span>
                    </a>
                    <a href="" className='hover:text-red-700'>
                        <span><FaInstagram /></span>
                    </a>
                </div>
                <a download="" target="_blank" href={pdf} >
                    <div  class="button p-6 px-8 flex justify-center items-center  cursor-pointer" data-tooltip="Size: 20Mb">
                        <div class="button-wrapper">
                            <div class="text">My Resume</div>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
            </section>
        </>
    );
};

