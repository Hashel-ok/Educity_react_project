import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import menuicon from '../../assets/menu-icon.png'

const Navbar = () => {


  const [sticky,setSticky] =useState(false);

  useEffect(() => {

    window.addEventListener('scroll', () => {

      window.scrollY>50? setSticky(true):setSticky(false)
    })


  },[]);


  const [mobmenu,setmobmenu]=useState(false);
 
const navtoogle=() => {

  mobmenu?setmobmenu(false): setmobmenu(true)


}



  return (
 
  
    <nav className={`container nav_bar ${sticky?'dark_nav':''}`}>
        
    <img src={logo} alt="" className='logo'/>
    <ul className={mobmenu?'navbar_toggle_menu': 'navbar_toggle_menu hide'}>
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li> <Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about_Section' smooth={true} offset={-130} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link className='btn' to='getintouch' smooth={true} offset={-260} duration={500}>Contact us</Link></li>


    </ul>

    <img src={menuicon} alt="" className='menu_icon' onClick={navtoogle}/>


    </nav>
    


  )
}

export default Navbar