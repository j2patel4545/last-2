import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { motion } from 'framer-motion';
import Photos from './Layouts/Photos.jsx';
import abc from './abc.mp4';

function Home() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2,
                when: "beforeChildren",
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    const handlePlayVideo = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div>
            <div className="relative pt-32 overflow-hidden xl:pt-40 bg-black">
                <motion.div
                    className="relative"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                        <motion.div
                            className="text-left md:max-w-xl md:mx-auto md:text-center"
                            variants={itemVariants}
                        >
                            <h1 className="tracking-tighter text-white">
                                <motion.span
                                    className="font-sans font-normal text-7xl"
                                    variants={itemVariants}
                                >
                                    Click
                                </motion.span>
                                <br />
                                <motion.span
                                    className="font-serif italic font-normal text-8xl"
                                    variants={itemVariants}
                                >
                                    Heart Studio
                                </motion.span>
                            </h1>
                            <motion.p
                                className="mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70"
                                variants={itemVariants}
                            >
                                Photography is time travel with a lens, freezing chaos into art. It’s capturing lightning, making moments immortal, rebellious, and electric!
                            </motion.p>

                            <motion.div
                                className="mt-8"
                                variants={buttonVariants}
                            >
                                <Link
    to="/contact"  // Change href to "to" for Link
    className="
        inline-flex
        items-center
        justify-center
        px-8
        py-2
        font-sans
        text-base
        font-semibold
        transition-all
        duration-200
        border-2 border-transparent
        rounded-full
        sm:leading-8
        bg-white
        sm:text-lg
        text-black
        hover:bg-opacity-90
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
    "
>
    Get in touch
</Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* <div className="relative max-w-5xl px-6 mx-auto mt-12 text-white -mb-8 pb-20 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">                          make it pb-20 only for desktop view do not change for mobile view */}
                <div className="relative max-w-5xl px-6 mx-auto mt-12 text-white -mb-8 pb-0 lg:pb-20 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">

                    <motion.div
                        className="overflow-hidden rounded-md aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        
                        <video
                            ref={videoRef}
                            className="object-cover w-full h-full transition-all duration-300 group-hover:opacity-80"
                            src={abc}
                            muted
                            loop
                            controls={isPlaying}  
                        />
                    </motion.div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        {!isPlaying && (
                            <motion.button
                                type="button"
                                className="flex flex-col items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                onClick={handlePlayVideo}
                            >
                                <span className="inline-flex items-center justify-center w-16 h-16 transition-all duration-200 border-2 rounded-full text-white border-primary hover:bg-white hover:bg-opacity-20">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.91926C7.37507 4.51934 6.5271 4.99945 6.5271 5.77675L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8575C19.061 12.4691 19.061 11.5309 18.4137 11.1425L8.0416 4.91926Z" />
                                    </svg>
                                </span>
                                <span className="mt-5 text-base font-normal text-white">Play trailer</span>
                            </motion.button>
                        )}
                    </div>
                </div>
            </div>
            <Photos />
        </div>
    );
}

export default Home;
