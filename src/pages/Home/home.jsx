import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import "../../pages/Home/home.scss";
import pdf from "../../../src/assets/files/MedRedaKarim-Resume.pdf";
import { FirstSection } from './components/firstSection';
import { motion, useAnimation, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react';

export const HomePage = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('header nav a');

            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    setActiveSection(id); // Update activeSection state
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                    });
                    const targetNavLink = document.querySelector(`header nav a[href*=${id}]`);
                    if (targetNavLink) {
                        targetNavLink.classList.add('active');
                    }
                };
            });
        };



        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const ref2 = useRef(null)
    const inView2 = useInView(ref2, { once: true });
    const controls = useAnimation()

    useEffect(() => {
        if (inView2) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView2]);


    const ref4 = useRef(null);
    const inView4 = useInView(ref4, { once: true });
    const controls4 = useAnimation();

    useEffect(() => {
        if (inView4) {
            controls4.start("visible");
        } else {
            controls4.start("hidden");
        }
    }, [controls4, inView4]);


    const ref5 = useRef(null);
    const inView5 = useInView(ref5, { once: true });
    const controls5 = useAnimation();


    useEffect(() => {
        if (inView5) {
            controls5.start("visible");
        } else {
            controls5.start("hidden");
        }
    }, [controls5, inView5]);








    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_zcqamod', 'template_yandlin', form.current, {
                publicKey: 'xgKYRHDXDMSD0o-mF',
            })
            .then(
                () => {
                    handleOpen("xs")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };


    const [size, setSize] = useState(null);

    const handleOpen = (value) => setSize(value);
    return (
        <>
            {/* sidebar */}
            <nav className='bg-black h-full w-16 fixed z-50 flex flex-col gap-8 '>
                <div className="flex items-center justify-center p-4">
                    <svg width="60" height="60" viewBox="0 0 150 229" class="looka-1j8o68f"><defs id="SvgjsDefs1109"><linearGradient id="SvgjsLinearGradient1114"><stop id="SvgjsStop1115" stop-color="#7d141d" offset="0"></stop><stop id="SvgjsStop1116" stop-color="#ff1e27" offset="1"></stop></linearGradient></defs><g id="SvgjsG1110" featurekey="rootContainer" transform="matrix(1,0,0,1,0,0)" fill="url(#SvgjsLinearGradient1114)"><path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M5,65 L75,0 L145, 65 L75, 10 z M5,149 L75,229 L145,144 L75, 219 z"></path></g><g id="SvgjsG1111" featurekey="nameFeature-0" transform="matrix(1.7730493575753248,0,0,1.7730493575753248,-3.475177653939919,68.085102094539)" fill="#fcfcfc"><path d="M30.76 40.2 c-0.04 -4.28 -1.64 -19.44 -1.76 -20.52 c-2.88 5.2 -5.64 10.44 -8.28 15.76 c-1.24 2.52 -1.6 3.52 -2.08 4.76 c-0.2 -0.04 -0.4 -0.08 -0.56 -0.08 s-0.32 0.04 -0.52 0.08 c-0.72 -1.64 -1.16 -2.64 -1.88 -4.04 c-2.8 -5.4 -6 -11.52 -8.64 -16.12 c-0.96 6 -1.68 16.56 -1.64 20.16 c-0.64 -0.16 -1 -0.24 -1.52 -0.24 c-0.8 0 -1.52 0.16 -1.92 0.24 c0.4 -1.88 3.2 -19.08 4.12 -27.84 c0.2 0.04 0.44 0.08 0.68 0.08 c0.2 0 0.52 -0.04 0.8 -0.08 c1.16 2.64 9 17.44 11.56 21.56 c6.44 -11.96 7.16 -13.28 9.52 -17.76 c0.96 -1.88 1.16 -2.28 1.84 -3.8 c0.28 0.04 0.48 0.08 0.72 0.08 c0.2 0 0.44 -0.04 0.76 -0.08 c0.92 8.44 2.24 20.32 3.28 26.76 c0.04 0.28 0.08 0.56 0.24 1.08 c-1.08 -0.16 -1.52 -0.24 -2.24 -0.24 c-1.16 0 -1.8 0.12 -2.48 0.24 z M61.64 39.72 l0 0.48 c-0.84 -0.12 -1.48 -0.24 -2.36 -0.24 c-0.84 0 -1.76 0.12 -2.88 0.24 c-3.8 -6 -6.72 -9.76 -9.8 -13.4 l-1.04 0 c0 2.84 -0.04 7 0.28 13.4 c-0.68 -0.16 -1.6 -0.24 -2.32 -0.24 c-1.08 0 -1.52 0.12 -2.12 0.24 c0.2 -4.72 0.28 -9.48 0.28 -15.32 c0 -3.72 -0.12 -7.88 -0.24 -12.36 c1.52 0.16 2.64 0.16 3.48 0.16 c0.72 0 4 -0.04 4.64 -0.04 c4.76 0 6.24 0.6 7.56 1.68 c1.52 1.24 2.04 2.88 2.04 4.8 c0 5.72 -5.4 6.72 -7.84 7.16 c1.48 2.28 9.84 12.76 10.32 13.44 z M55 19.56 c0 -4.68 -3.96 -5.28 -6.88 -5.28 c-1.16 0 -2 0.12 -2.52 0.2 c-0.08 1.8 -0.08 3.64 -0.08 5.44 c0 1.84 0.04 4.64 0.04 5.48 c0.76 0.08 1.16 0.08 2.12 0.04 c1.8 -0.08 7.32 -0.32 7.32 -5.88 z M66.04 26.72 c0 -8.76 -0.12 -10.28 -0.36 -14.2 c0.68 0.12 1.36 0.24 2.44 0.24 c1 0 1.48 -0.12 2.04 -0.24 c-0.12 1.12 -0.2 3.4 -0.28 5.08 c-0.08 2.16 -0.04 3.96 0 7.8 c2.84 -2.32 3.96 -3.2 8.92 -8.48 c2.72 -2.88 2.96 -3.2 3.8 -4.4 c0.72 0.16 1.36 0.24 2.08 0.24 c0.68 0 1.24 -0.12 1.8 -0.24 l0.08 0.24 c-1.72 1.2 -11.4 10.72 -12.92 12.08 c3.04 3.44 7.88 8.92 10.92 12.32 c0.4 0.4 1.28 1.4 2 2.12 l0 0.92 c-0.52 -0.12 -1.8 -0.24 -2.52 -0.24 s-2 0.08 -2.84 0.24 c-1.48 -2.52 -3.56 -4.92 -5.56 -7.24 c-3.16 -3.68 -3.96 -4.52 -5.68 -6.36 l-0.12 0.16 l0 2.48 c0.04 6.16 0.04 7.16 0.32 10.96 c-0.64 -0.12 -1.4 -0.24 -2.24 -0.24 c-0.8 0 -1.56 0.12 -2.36 0.24 c0.4 -7 0.48 -8.12 0.48 -13.48 z"></path></g></svg>
                </div>
                <div className="flex flex-col items-center justify-center  gap-10 h-[60%]">
                    <div
                        className={`text-gray-600  rotate-90 text-[18px] flex justify-center items-center hover:text-red-700 h-[63px] ${activeSection === 'about' ? 'text-white  line' : ''
                            }`}
                    >
                        <a href="#about">
                            <h1>About</h1>
                        </a>
                    </div>
                    <div
                        className={`text-gray-600  rotate-90 text-[18px] flex justify-center items-center hover:text-red-700 h-[63px] ${activeSection === 'projects' ? 'text-white line' : ''
                            }`}
                    >
                        <a href="#projects">
                            <h1>Projects</h1>
                        </a>
                    </div>
                    <div
                        className={`text-gray-600  rotate-90 text-[18px] flex justify-center items-center hover:text-red-700 h-[63px] ${activeSection === 'contact' ? 'text-white line' : ''
                            }`}
                    >
                        <a href="#contact">
                            <h1>Contact</h1>
                        </a>
                    </div>
                </div>
            </nav>

            {/* navbar */}
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
                    <div class="button p-6 px-8 flex justify-center items-center  cursor-pointer" data-tooltip="Size: 20Mb">
                        <div class="button-wrapper">
                            <div class="text">My Resume</div>
                            <span class="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                            </span>
                        </div>
                    </div>
                </a>
            </section>

            {/* hero section */}
            <FirstSection />

            {/* second section */}
            <section ref={ref2} className='text-white lg:px-72 px-24 lg:py-3  py-20 flex flex-col' id="about" >
                <h1 className='about lg:text-[58px] text-[40px]'>Abouts<span className='text-red-500 font-serif text-[58px]'>.</span></h1>
                <motion.div
                    className='pb-14'
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 10 },
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div className="lg:flex py-16 w-full gap-20 pt-8">
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
                </motion.div>
            </section>

            {/* third section */}
            <section ref={ref4} className='text-white lg:px-72 px-24 lg:py-3 py-20 flex flex-col lg:pb-12' id='projects'>
                <h1 className='w-fit project lg:text-[58px] text-[40px] font-semibold'>Projects<span className='text-red-500 font-serif text-[58px]'>.</span></h1>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 10 },
                    }}
                    initial="hidden"
                    animate={controls4}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div className="pt-5">
                        <div className="flex lg:flex-row lg:flex-nowrap flex-wrap  lex-col gap-x-8 lg:ps-10 ps-6">
                            <div className="">
                                <div className="bg-gray-900 p-32 rounded-md"></div>
                                <div className="text-2xl pt-5 flex items-center justify-between">
                                    <h1 className='font-semibold text-3xl'>project1</h1>
                                    <div className="flex gap-3  text-white  ">
                                        <a href=""><span className='text-white text-opacity-55 hover:text-opacity-100'><FaGithub /></span></a>
                                        <a href=""><span className='text-white text-opacity-55 hover:text-opacity-100'><RxExit /></span></a>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='text-red-500 py-3 text-base font-semibold'>Lorem ipsum dolor sit amet.</h1>
                                    <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolorem ipsum quod fugit cum, voluptatibus delectus maxime? Esse, quo enim.</p>
                                </div>
                            </div>
                            <div className="lg:pt-0 pt-10">
                                <div className="bg-gray-900 p-32 rounded-md"></div>
                                <div className="text-2xl pt-5 flex items-center justify-between">
                                    <h1 className='font-semibold text-3xl'>project2</h1>
                                    <div className="flex gap-3  text-white  ">
                                        <a href=""><span className='text-white text-opacity-55 hover:text-opacity-100'><FaGithub /></span></a>
                                        <a href=""><span className='text-white text-opacity-55 hover:text-opacity-100'><RxExit /></span></a>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='text-red-500 py-3 text-base font-semibold'>Lorem ipsum dolor sit amet.</h1>
                                    <p className='text-lg w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolorem ipsum quod fugit cum, voluptatibus delectus maxime? Esse, quo enim.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center pt-10 ps-16">
                            <div className="lg:w-1/2 ">
                                <div className="bg-gray-900 p-32 rounded-md"></div>
                                <div className="text-2xl pt-5 flex items-center justify-between">
                                    <h1 className='font-semibold text-3xl'>project3</h1>
                                    <div className="flex gap-3  text-white  ">
                                        <a href=""><span className='text-white text-opacity-55 hover:text-opacity-100'><FaGithub /></span></a>
                                        <a href=""><span className='text-white text-opacity-55 hover:text-opacity-100'><RxExit /></span></a>
                                    </div>
                                </div>
                                <div className="">
                                    <h1 className='text-red-500 py-3 text-base font-semibold'>Lorem ipsum dolor sit amet.</h1>
                                    <p className='text-lg w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolorem ipsum quod fugit cum, voluptatibus delectus maxime? Esse, quo enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </section>

            {/* fourth section */}
            <section ref={ref5} className='text-white lg:px-72 px-24 lg:py-7  flex flex-col' id='contact'>
                <h1 className='about lg:text-[58px] text-[40px] '>Contact<span className='text-red-500 font-serif text-[58px]'>.</span></h1>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 10 },
                    }}
                    initial="hidden"
                    animate={controls5}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex lg:ps-0 ps-16 items-center justify-center flex-col-reverse lg:py-16 gap-12 lg:flex-row-reverse">
                        <div className="lg:w-1/2 lg:pt-11">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="wave-group">
                                    <input name="user_email" required type="text" className="input" />
                                    <span className="bar"></span>
                                    <label className="label">
                                        <span className="label-char" style={{ '--index': 0 }}>E</span>
                                        <span className="label-char" style={{ '--index': 1 }}>m</span>
                                        <span className="label-char" style={{ '--index': 2 }}>a</span>
                                        <span className="label-char" style={{ '--index': 3 }}>i</span>
                                        <span className="label-char" style={{ '--index': 4 }}>l</span>
                                    </label>
                                </div>
                                <div className="wave-group mt-7 lg:pb-0 pb-8">
                                    <textarea name="message" required type="text" className=" input" />
                                    <span className="bar"></span>
                                    <label className="label">
                                        <span className="label-char" style={{ '--index': 0 }}>M</span>
                                        <span className="label-char" style={{ '--index': 1 }}>e</span>
                                        <span className="label-char" style={{ '--index': 2 }}>s</span>
                                        <span className="label-char" style={{ '--index': 3 }}>s</span>
                                        <span className="label-char" style={{ '--index': 4 }}>a</span>
                                        <span className="label-char" style={{ '--index': 5 }}>g</span>
                                        <span className="label-char" style={{ '--index': 6 }}>e</span>
                                    </label>
                                </div>
                                <div className="w-full flex pt-5 justify-center">
                                    <button className='bg-[red] hover:bg-red-700 text-white font-bold py-2 px-4 w-44 mt-4 rounded'>send</button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:w-1/2 w-[80vw]  pt-4 text-center flex  flex-col justify-center  opacity-85 ">
                            <h1 className='lg:text-[48px] text-[30px]'>Get in Touch for Collaboration<span className='text-red-500'>!</span></h1>
                            <h1 className='lg:text-[24px] py-5'>Shoot me an email if you want to connect! You can also find me on <span className='text-red-500'>Linkedin</span> or <span className='text-red-500'>Instagram</span> if that's more your speed<span className='text-red-500'>.</span></h1>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Dialog
                open={
                    size === "xs"
                }
                size={size || "md"}
                handler={handleOpen}
                className='bg-gray-900'
            >
                <DialogHeader className='flex text-center text-white w-full justify-center'>Message sent successfuly</DialogHeader>
                <DialogBody className='flex justify-center pb-20'>
                    <div class="svg-container">
                        <svg class="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                            <circle class="circle" fill="#5bb543" cx="24" cy="24" r="22" />
                            <path class="tick" fill="none" stroke="#FFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M14 27l5.917 4.917L34 17" />
                        </svg>
                    </div>
                </DialogBody>
                <DialogFooter className='flex justify-center'>
                    <Button onClick={() => handleOpen(null)} className='bg-[red] w-1/2 hover:bg-red-900 rounded-full py-4 text-[14px]'>OK</Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};
