import anime from "animejs";
import { motion, useAnimate, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from "react";


export const FirstSection = () => {
    return (
        <div className="relative grid place-content-center bg-slate-100 px-8 py-12">
            <DotGrid />
        </div>
    );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 24;

const DotGrid = () => {
    const handleDotClick = (e) => {
        anime({
            targets: ".dot-point",
            scale: [
                { value: 1.35, easing: "easeOutSine", duration: 250 },
                { value: 1, easing: "easeInOutQuad", duration: 500 },
            ],
            translateY: [
                { value: -15, easing: "easeOutSine", duration: 250 },
                { value: 0, easing: "easeInOutQuad", duration: 500 },
            ],
            opacity: [
                { value: 1, easing: "easeOutSine", duration: 250 },
                { value: 0.5, easing: "easeInOutQuad", duration: 500 },
            ],
            delay: anime.stagger(100, {
                grid: [GRID_WIDTH, GRID_HEIGHT],
                from: e.target.dataset.index,
            }),
        });
    };

    const dots = [];
    let index = 0;

    for (let i = 0; i < GRID_WIDTH; i++) {
        for (let j = 0; j < GRID_HEIGHT; j++) {
            dots.push(
                <div
                    className="group cursor-crosshair lg:block hidden rounded-full p-2 transition-colors hover:bg-slate-600"
                    data-index={index}
                    key={`${i}-${j}`}
                >
                    <div
                        className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-gray-600 to-[#390202] lg:opacity-50  group-hover:from-red-800 group-hover:to-red-900"
                        data-index={index}
                    />
                </div>
            );
            index++;
        }
    }

    const ref = useRef(null)
    const inView = useInView(ref)

    const controls = useAnimation()

    const sideControls = useAnimation()
    useEffect(() => {
        // console.log(inView);
        if (inView) {
            controls.start("visible")
            sideControls.start("visible")
        }
    }, [inView])




    return (
        <section ref={ref} className='lg:ps-24 ps-16 mt-[63px] text-white lg:h-[79vh] flex items-center lg:pb-20 pt-5 w-full ' >

            <motion.div className="lg:w-[50vw] w-[70vw] flex flex-col lg:absolute left-72 z-10 h-fit"
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 10 },
                }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                <h1 className='text-[56px] lg:text-[96px]'>Hey, I'm Reda<span className='text-red-500 font-serif lg:text-[100px]'>.</span></h1>
                <h2 className='text-[36px]'>I'm a <span className="text-red-500">Full Stack Developer</span></h2>
                <p className='text-[18px]'>Lorem ipsum dolor, magni repellat quis voluptatm adipisci quos reiciendis necessitatibus, autem, explicabo ipsa vero laudantium facere asperiores eum quibusdam nesciunt.</p>
                <a href="#contact"><button className='bg-[red] hover:bg-red-700 text-white font-bold py-2 px-4 w-44 mt-4 rounded'>Contact Me</button></a>
            </motion.div>

            <div
                onClick={handleDotClick}
                style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
                className="lg:grid w-fit absolute lg:right-36 top-28"
            >
                {dots}
            </div>

        </section>

    );
};

