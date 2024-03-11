import React, { useEffect, useState } from 'react';

export const SideBar = () => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');
                if (top >= offset && top < offset + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className='bg-black h-full w-16 fixed z-50 flex flex-col gap-8 '>
                <div className="flex items-center justify-center p-4">
                </div>
                <div className="flex flex-col gap-10 h-[60%]">
                    <div className={`text-gray-600 rotate-90 text-[18px] flex justify-center items-center hover:text-gray-300   h-[63px] ${activeSection === 'first' ? 'text-blue-500' : 'text-gray-600'}`}>
                        <a href="#about"><h1>About</h1></a>
                    </div>
                    <div className={`text-gray-600 rotate-90 text-[18px] flex justify-center items-center hover:text-gray-300   h-[63px] ${activeSection === 'second' ? 'text-blue-500' : 'text-gray-600'}`}>
                        <a href="#projects"><h1>Projects</h1></a>
                    </div>
                    <div className={`text-gray-600 rotate-90 text-[18px] flex justify-center items-center hover:text-gray-300   h-[63px] ${activeSection === 'contact' ? 'text-blue-500' : 'text-gray-600'}`}>
                        <a href="#contact"><h1>Contact</h1></a>
                    </div>
                </div>
            </nav>
        </>
    );
};






