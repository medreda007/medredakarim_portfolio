import React from 'react';
import "../components/SecondSection.scss"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


export const SecondSection = ({ setActiveSection }) => {
    
    return (
        <>
            <section className='text-white lg:px-72 px-24 lg:py-32 py-20 flex flex-col' id="about" >
                <h1 className='about lg:text-[58px] text-[40px]'>Abouts<span className='text-red-500 font-serif text-[58px]'>.</span></h1>
                <div className="lg:flex w-full gap-20">
                    <div className="lg:w-[60%] w-[70vw] flex flex-col gap-5 pt-6 text-white text-opacity-80 text-lg">
                        <p className='text-lg'><span className='text-3xl'>H</span>ey there!, I'm Reda, if you haven't already gathered that by now. I'm a junior web developer based in Casablanca , Morocco.
                        </p>
                        <p>With a keen eye for detail and a passion for problem-solving,
                            I specialize in crafting tailored solutions to meet the unique needs of each client, whether it's designing responsive websites or setting up dynamic e-commerce platforms.
                        </p>
                        <p>With a passion for problem-solving and a commitment to exceeding expectations, I bring enthusiasm and dedication to every project.
                            Let's collaborate to bring your digital vision to life!</p>
                    </div>
                    <div className="lg:w-[40%] pt-6">
                        <h4 className='flex items-center pb-8 gap-2'>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                color="red"
                                style={{ color: "red" }}
                                height="2.4rem"
                                width="2.4rem"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 0 1-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z"></path>
                            </svg>
                            <span className='text-2xl'>Use at work</span>
                        </h4>
                        <div className="flex gap-4 flex-wrap">
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">JavaScript</span>
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">HTML</span>
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">CSS</span>
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">React</span>
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">TailWind</span>
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">Bootstrap</span>
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">GitHub</span>
                            <span className="chip  bg-gray-900 font-semibold px-6 py-1 rounded-2xl cursor-pointer">NodeJS</span>
                        </div>
                    </div>
                </div>
                <button class="btn-cssbuttons w-52 bg-red-500 mt-6 flex items-center justify-center">
                    <span className='text-md font-semibold'>My links</span><span>
                    </span>
                    <ul className='text-2xl'>
                        <li>
                            <a href="https://github.com/SharpTH">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/SumethWrrn">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://codepen.io/sharpth">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </button>
            </section>
        </>
    );
};

