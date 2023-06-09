import React from "react";
import { NavLink } from "react-router-dom";
import LocationHome from "./2Location";
import CategoryHomeMini from "./3Category";
import HeroSecHome from "./4Hero";
import "./style.css"
// import HeaderHome from "./1Header";

const Home = () => {
    return (
        // <Wrapper>
        <>
            {/* <HeaderHome /> */}
            <LocationHome />
            <CategoryHomeMini />
            <HeroSecHome />

            <div className="pt-[100px] p-5 min-h-[200vh] flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-5 ">
                    <div className="hero-section-data flex flex-col gap-5 md:w-2/3 md:pl-10">

                        <div>
                            <p className="intro-data text-[#818181] uppercase text-[13px]">Welcome to</p>
                            <h1 className="text-3xl font-semibold">Arzoo Store</h1>
                        </div>
                        <div className="">

                            <p className="max-w-max">
                                If you build a great experience . Visit Best Sneaker Website ARZOO
                            </p>
                        </div>
                        <NavLink className="max-w-max">
                            <button className="shop-button" >
                                Shop Now
                            </button>
                        </NavLink>
                    </div>
                    <div className=" relative">
                        <img src="src/assets/homePageImages/istockphoto-1193750118-612x612.jpg" alt="" className="md:scale-90" />
                        <span className=" -z-[1] absolute -top-[20px] -right-[20px] md:block h-[60%] aspect-[3/2] bg-[#ae00ff]"></span>
                    </div>
                </div>

            </div>
        </>
        // </Wrapper>
    )
}

export default Home