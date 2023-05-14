import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '0',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Header() {
    const [active, setActive] = useState("menu");
    const [togglerIcon, setIcon] = useState("navToggler");

    const navToggle = () => {
        active === 'menu' ?
            setActive('menuActive menu') :
            setActive('menu')

        togglerIcon === 'navToggler' ?
            setIcon('navToggler toggle') :
            setIcon('navToggler')
    }

    console.log(active);

    return (
        <div className="headWrapper z-[1] h-[70px]">
            <div className="header h-full ">
                <div className="logo">
                    <img src="assets\logo2.png" className='w-[170px] md:w-[200px] ' alt="" />
                </div>

                <div className={active} >
                    <ul className='smallText' >
                        <li onClick={navToggle}><NavLink to={'/Home'} > Home</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/about'} > About</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/product'} >Product</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/contact'} >contact us</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/signup'} >signup</NavLink></li>
                        <li onClick={navToggle}><NavLink to={'/login'} className="">Log In</NavLink></li>
                    </ul>
                </div>

                <div className=" flex items-center gap-5">
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder=""
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <NavLink to="/cart">
                        <ShoppingCartOutlinedIcon />
                    </NavLink>
                </div>

                <div onClick={navToggle} className={togglerIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </div>
        </div>
    )

}