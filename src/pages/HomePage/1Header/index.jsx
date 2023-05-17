import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import Cart from '../../CartPage';

function HeaderHome() {

    const [searchInput, setSearchInput] = useState("")
    console.log(searchInput)
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });


    return (
        <>
            <div ref={ref} className='flex flex-col bg-violet-500 w-full px-2'>
                <div className="first-layer flex items-center justify-between p-2">
                    <div className="flex items-center gap-5">
                        <span className="flex items-center text-4xl">
                            <MenuIcon fontSize='inherit' />
                        </span>
                        {/* <span className="">menu</span> */}
                        <span className="">logo</span>
                    </div>
                    <div className="flex items-center gap-5 text-3xl">
                        <NavLink className="flex items-center" >
                            <PersonOutlineOutlinedIcon fontSize='inherit' />
                        </NavLink>
                        <NavLink to={"/cart"} className="flex items-center">
                            <ShoppingCartOutlinedIcon fontSize='inherit' />
                        </NavLink>
                    </div>
                </div>
                <div className="second-layer flex items-center justify-between p-2 gap-1">
                    <input type="text" className='w-full p-[.7rem] rounded-lg' onChange={e => (setSearchInput(e.target.value))} value={searchInput} />
                    <span className=" flex items-center p-2 px-3 bg-yellow-200 rounded-lg text-3xl">
                        <SearchIcon fontSize='inherit' />
                    </span>
                </div>

                <div className="third-layer flex items-center gap-5 p-2 py-3 font-semibold">
                    <span className="">Category</span>
                    <span className="">Wishlist</span>
                    <span className="">Deals</span>
                </div>

            </div>

            <div className={inView ? " absolute top-0 -translate-y-[100px] w-full" : "fixed top-0 w-full transition-[2s] z-10"}>
                <div className=" flex items-center justify-between p-1 px-4 gap-3 w-full bg-violet-500 ">
                    <span className=" flex items-center text-4xl">
                        <MenuIcon fontSize='inherit' />
                    </span>
                    <div className=" flex items-center w-full  gap-1">
                        <input type="text" className='w-full p-2 py-3 rounded-lg' onChange={e => (setSearchInput(e.target.value))} value={searchInput} />
                        <span className=" flex items-center p-3 bg-yellow-200 rounded-lg text-2xl">
                            <SearchIcon fontSize='inherit' />
                        </span>
                    </div>
                    <span className=" flex items-center text-3xl">
                        <ShoppingCartOutlinedIcon fontSize='inherit' />
                    </span>
                </div>
            </div>

        </>
    )
}

export default HeaderHome
