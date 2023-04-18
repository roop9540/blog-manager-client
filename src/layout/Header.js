import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { clearUser } from '../redux/creatSlice';

function Header() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();


    function handleLogout() {
        dispatch(clearUser());
    }

    return (
        <>



            <div className='bg-white  opacity-100 navbar'>

                <nav className="navbar container navbar-expand-lg   sticky-top" data-bs-theme="dark">
                    <div className="container">
                        <div className='d-flex w-100 align-items-center justify-content-between'>
                            <div className='icon'>
                                <a className="navbar-brand" href="/"><img src='	https://bookxpert.co.in/assets/img/logo.png' className="" style={{ width: '12rem' }} /></a>
                                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src='../images/logo-no-background.png' />
                </button> */}
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center ">
                                    <li className="nav-item m-3 fs-5" style={{ textDecoration: "none" }}>
                                        {/* <a className="nav-link active" aria-current="page" href="/home">Home</a> */}
                                        <NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink>

                                        {/* <NavLink to="/home" >Home</NavLink> */}
                                    </li>
                                    <li className="nav-item m-3 fs-5">
                                        {/* <a className="nav-link" href="/about">LogIn</a> */}
                                        <NavLink to="/blog" style={{ textDecoration: 'none' }}>Blog</NavLink>
                                    </li>
                                    {!user.token ?
                                        <li className="nav-item m-3 fs-5">
                                            {/* <a className="nav-link" href="/about">LogIn</a> */}
                                            <NavLink to="/login" style={{ textDecoration: 'none' }}>   LogIn</NavLink>
                                        </li>
                                        :
                                        <li className="nav-item m-3 fs-5" >

                                            <NavLink to="/" onClick={handleLogout} style={{ textDecoration: 'none' }}>Logout</NavLink>
                                        </li>
                                    }
                                    {!user.token ?
                                        <li className="nav-item m-3 fs-5">
                                            {/* <a className="nav-link" href="/services">Register</a> */}
                                            <NavLink to="/register" style={{ textDecoration: 'none' }}>Register</NavLink>
                                        </li> : ""}

                                    <li className="nav-item m-3 fs-5">

                                        <NavLink to='/aboutus' style={{ textDecoration: 'none' }} >About Us</NavLink>
                                    </li>

                                    <li className="nav-item m-3 fs-5">

                                        <NavLink to='/contactus' style={{ textDecoration: 'none' }}>Contact Us</NavLink>
                                    </li>
                                    {user.token ?
                                        <li className="nav-item m-3 fs-5">

                                            <strong>Hello&nbsp;{user.name}</strong>
                                        </li> : ""}


                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>


        </>
    )
}

export default Header
