import { logDOM } from '@testing-library/react';
import React from 'react'
import Nav from './Nav'

import logo from '../assets/Logo.svg'


const Header = () => {
  return (
    <header>
        <a href="/">
            <img src={logo} alt="Logo of Little Lemon" />
        </a>
        <Nav />
    </header>
  )
}


export default Header;