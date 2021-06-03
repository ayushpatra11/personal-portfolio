import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Link as LinkS, animateScroll as scroll} from 'react-scroll';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar]=useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  function handleNavbar(){
    if(window.scrollY>=80){
        setNavbar(true);
        setClick(false);
    }else if(window.scrollY<80){
        setNavbar(false);
    }
    // console.log(window.scrollY);
}

window.addEventListener('scroll', handleNavbar);

const toggleHome= () =>{
  scroll.scrollToTop();
}

  return (
    <>
      <nav className={navbar ? 'navbar active': 'navbar'}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={toggleHome}>
            {"#AYUSH"}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{color: "#194350"} }/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <LinkS to='landing' className='nav-links' 
              spy={true} smooth={true} offset={-80} duration={500} exact='true' 
              >
                Home
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
                spy={true} smooth={true} offset={-80} duration={500} exact='true'
                to='education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Education
              </LinkS>
            </li>
            <li className='nav-item'>
            
            <LinkS
              spy={true} smooth={true} offset={-80} duration={500} exact='true'
                to='projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </LinkS>
            </li>
            <li className='nav-item'>
            <LinkS
              spy={true} smooth={true} offset={-80} duration={500} exact='true'
                to='skills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </LinkS>
            </li>
            <li className='nav-item'>
              <LinkS
              spy={true} smooth={true} offset={-80} duration={500} exact='true'
                to='internships'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Internships
              </LinkS>
            </li>

            <li>
              {/* <LinkS
              spy={true} smooth={true} offset={-80} duration={500} exact='true'
                to='/contactme'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Me
              </LinkS> */}
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Contact Me</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;