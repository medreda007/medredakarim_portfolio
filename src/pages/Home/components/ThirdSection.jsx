import "../components/ThirdSection.scss"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxExit } from "react-icons/rx";


export const ThirdSection = ({ setActiveSection }) => {
    
    return (
        <>
            <section className='text-white lg:px-72 px-24 lg:py-32 py-20 flex flex-col' id='projects'>
                <h1 className='w-fit project lg:text-[58px] text-[40px] font-semibold'>Projects<span className='text-red-500 font-serif text-[58px]'>.</span></h1>
                <div className="pt-5">
                    <div className="flex gap-x-8">
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
                        <div className="">
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
                                <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolorem ipsum quod fugit cum, voluptatibus delectus maxime? Esse, quo enim.</p>
                            </div>
                        </div>


                    </div>
                    <div className="flex justify-center pt-10">
                        <div className="w-1/2">
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
                                <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci dolorem ipsum quod fugit cum, voluptatibus delectus maxime? Esse, quo enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

