import React from 'react'
import './Footer.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { LinkedIn } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import { FacebookRounded } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
    <h2>Reach Me</h2>
    <a href='https://wa.me/6303646791' target="blank"> <WhatsAppIcon/> </a>
    <a href='https://www.linkedin.com/in/guna-sekhar-reddy/' target="blank"> <LinkedIn/> </a>  
    <a href='https://github.com/GunaSekharReddy-Crypto' target="blank"> <GitHub/> </a>
    <a href='https://www.facebook.com/gunasekhar.gunasekhar.397' target="blank"> <FacebookRounded/> </a>

  <div className='footer__copyright'>
&copy; Guna Sekhar Reddy.All rights reserved.

  </div>  
    
    </footer>
  )
}

export default Footer