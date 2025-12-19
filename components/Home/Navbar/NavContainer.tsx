"use client"
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'



const NavContainer = () => {

    const [showNav, setShowNav] = useState(false);

    // open nav fuction
    const openNavHandler = () => setShowNav(true);

    // close nav fuction
    const closeNavHandler = () => setShowNav(false);

  return (
    <div>
      <Nav openNav = {openNavHandler}/>
      <MobileNav showNav = {showNav} closeNav = {closeNavHandler}/>
    </div>
  )
}

export default NavContainer
