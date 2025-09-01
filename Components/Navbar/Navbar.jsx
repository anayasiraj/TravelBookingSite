import React, {useState} from 'react'
import './navbar.css'  
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar')

    // IDK WHAT SETACTIVE MEANS or what the stuff in quotes means BUT lets toggle w grid
    const showNav = ()=> {
        setActive("navBar activeNavbar")
    }
    const removeNav = ()=> {
        setActive("navBar")    // why only navbar?
    }

    return (
        <section className = 'navBarSection'>
            <header className = "header flex" >

                <div className = "logo div">
                    <a href = "#" className="logo">
                        <h1><MdOutlineTravelExplore className =  "icon"/> Travel. </h1>   
                    </a>
                </div>

                <div className = {active} >
                    <ul className = "navLists flex">

                        <li className = "navItem">
                            <a href="#" className="navLink"> Home </a>
                        </li>

                        <li className = "navItem">
                            <a href="#" className="navLink"> Packages </a>
                        </li>

                        <li className = "navItem">
                            <a href="#" className="navLink"> Shop </a>
                        </li>

                        <li className = "navItem">
                            <a href="#" className="navLink"> About </a>
                        </li>

                        <li className = "navItem">
                            <a href="#" className="navLink"> Pages </a>
                        </li>

                        <li className = "navItem">
                            <a href="#" className="navLink"> News </a>
                        </li>

                        <li className = "navItem">
                            <a href="#" className="navLink"> Contact </a>
                        </li>

                        <button className="btn">
                            <a href="#"> BOOK NOW </a>
                        </button>

                    </ul>

                    <div onClick = {removeNav} // can it ALSO REMOVE NAV IF U RECLICK ON GRID?
                    className="closeNavbar">
                        <AiFillCloseCircle className = "icon" />
                    </div>

                </div>

                <div onClick = {showNav}      // navbar appears once u click on the grid!
                className = "toggleNavbar"> 
                    <TbGridDots className = "icon"/>  
                </div>     
                

            </header>
        </section>
    )
}

export default Navbar