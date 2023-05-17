import React from 'react'
import { useRef, useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer';
import HeroData from "../../../json//About.json"

function HeroSecHome() {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const EventContainerInterval = setInterval(() => {
            goToNext();
            console.log(currentIndex)
        }, 3000);
        return () => clearInterval(EventContainerInterval);
    }, [currentIndex]);

    const goToPrev = () => {
        if (currentIndex == 0) {
            setCurrentIndex(HeroData.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const goToNext = () => {
        if (currentIndex != HeroData.length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const dotStyles = {
        background: "#fef08a"
    }

    const eventContainerStyles = {
        transform: `translateX(${(currentIndex) * -97}vw)`
    }

    return (
        <>
            {/* <button onClick={} className="">button</button> */}
            <div className='relative flex items-center overflow-hidden pl-[3vw] mt-3 gap-[3vw] '>
                <div className="absolute bottom-0 z-[1] flex justify-between w-[94vw] h-full">
                    <button onClick={goToPrev} className='w-1/4 block'></button>
                    <button onClick={goToNext} className='w-1/4 block'></button>
                </div>

                {
                    HeroData.map((item, key) => {
                        return (
                            <>
                                <span key={key} style={eventContainerStyles} className=" transition-transform">
                                    <div className="flex items-center justify-center min-h-[18rem] min-w-[94vw] bg-violet-950">
                                        <p className="text-3xl text-white">
                                            {item.about}
                                        </p>
                                    </div>
                                </span>
                            </>
                        )
                    })
                }

                <div className="absolute bottom-5 z-[2] flex items-center w-[94vw]">
                    <span className="flex items-center justify-center gap-2 w-full">
                        {
                            HeroData.map((item, eventIndex) => {
                                return (
                                    <button key={eventIndex} onClick={() => { setCurrentIndex(eventIndex) }} style={currentIndex == eventIndex ? dotStyles : null} className=" h-3 aspect-square rounded-xl bg-violet-300"></button>
                                )
                            })
                        }
                    </span>
                </div>
                <div className="min-h-[18rem] w-full bg-violet-950">

                </div>
                {/* <div className="absolute bottom-5 flex items-center w-[94vw]">
                <span className="flex items-center justify-center gap-2 w-full">
                <span className=" h-3 aspect-square rounded-xl bg-white"></span>
                    <span className=" h-3 aspect-square rounded-xl bg-white"></span>
                    <span className=" h-3 aspect-square rounded-xl bg-white"></span>
                    <span className=" h-3 aspect-square rounded-xl bg-white"></span>
                    <span className=" h-3 aspect-square rounded-xl bg-white"></span>
                    <span className=" h-3 aspect-square rounded-xl bg-white"></span>
                    </span>
                </div> */}
            </div>
        </>
    )
}

export default HeroSecHome
