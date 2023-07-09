import React from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import "./NavBar.css"
import styled from "styled-components";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../logo4.png"

const NavBar = () =>
{
    const [menuIcon, setMenuIcon] = useState();

    const Wrapper = styled.section`
    *
    {
        margin: 0;
        padding: 0;
    }
    .navbar
    {
        display: flex;
        justify-content: space-between;
        height: 3rem;
        background: #ebe9e9d9;
    }
    .logo
    {
        margin-left: 65px;
    }
    .logo img 
    {
        width: 165px;
    }
    .navbar-lists
    {
        display: flex;
        gap: 3.8rem;
        align-items: center;
        list-style: none;

        a
        {
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: 500;
            text-transform: uppercase;
        }
    }

    
    .mobile-navbar-btn
    {
        display: none;
        background-color: transparent;
        cursor: pointer;
        border: none;
    }
    .mobile-nav-icon[name="close-outline"] 
    {
      display: none;
    }



    @media(max-width:960px)
    {
        .mobile-navbar-btn
        {
            display: block;
            z-index: 999;
            font-size: 50px;
        }
        /* .navbar
        {
            position: relative;
        } */
        .navbar-lists
        {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            visibility: hidden;
            opacity: 0;
            /* transform: translateX(100%); */
            transition: all 3s linear;
        }
        .active .navbar-lists
        {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            transform-origin: right;
            transition: all 3s linear;
        }
        .active .mobile-nav-icon
        {
            display: none;
        }
        .active .close-outline
        {
            display: block;
        }
    }
    `
    return(
        <>
        <Wrapper>
            <div className= { menuIcon ? "navbar active" : "navbar"  } >
                <div className="logo">
                    <NavLink to="/"> <img src={logo} alt="logo-img"  /> </NavLink>  
                    {/* <h1> dStore </h1> */}
                </div>

                <ul className="navbar-lists">
                    <li> <NavLink to="/"> HOME </NavLink> </li>
                    <li> <NavLink to="about"> ABOUT </NavLink> </li>
                    <li> <NavLink to="product"> PRODUCTS </NavLink> </li>
                    <li> <NavLink to=""> CONTACT </NavLink> </li>
                </ul>

                {/* two button for open and close of menu */}
                <div className="mobile-navbar-btn">
                    <CgMenu name="menu-outline" className="mobile-nav-icon" onClick={ ()=> setMenuIcon(true) } />
                    <CgClose name="close-outline" className="mobile-nav-icon close-outline" onClick={ ()=> setMenuIcon(false) } />
                </div>

            </div>
        </Wrapper>

        <Outlet/>
        </>
    )
}

export default NavBar;