import React from 'react'
import './Header.css'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>

      <div className='container header_container' id='about'>
        <h1>Hello!👋</h1>
        <HeaderSocials />
      </div>

    </header>

  )
}

export default Header