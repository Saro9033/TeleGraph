import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {FaLaptop, FaMobileAlt, FaTabletAlt, FaPlusCircle } from 'react-icons/fa'
import DataContext from '../Context/DataContext'


const Navbar = () => {
    const width = useContext(DataContext)

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark" style={{position:'sticky', top:'0px', zIndex:'1' }}>
            <div className="container-fluid"> 
            <a href="/" style={{fontSize:'1.5rem'}} className="navbar-brand text-info h1" >
		  TeleGraph 
	    </a>   
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to='/newpost'>Add post <FaPlusCircle/> </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className='text-light px-2 py-2'> {width < 770 ? <FaMobileAlt style={{fontSize:'30px'}}/> : width < 990 ? <FaTabletAlt  style={{fontSize:'30px'}}/> : <FaLaptop  style={{fontSize:'30px'}}/>} </li>
                    </ul>
                </div>               
            </div>
        </nav>
    )
}

export default Navbar