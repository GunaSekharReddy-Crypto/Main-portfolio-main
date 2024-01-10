import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { FacebookRounded } from '@mui/icons-material'

const HeaderSocials = () => {
  return (
    <div className='Header__socials'>
      <a href='https://wa.me/6303646791' target="blank"> <WhatsAppIcon /> </a>
      <a href='https://www.linkedin.com/in/guna-sekhar-reddy/' target="blank"> <LinkedIn /> </a>
      <a href='https://github.com/GunaSekharReddy-Crypto' target="blank"> <GitHub /> </a>
      <a href='https://www.facebook.com/gunasekhar.gunasekhar.397' target="blank"> <FacebookRounded /> </a>

    </div>

  )
}

export default HeaderSocials