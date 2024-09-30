
import './App.css'
import {faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { DataProvider } from './/context/dataContext';
import { useRef } from 'react';
function App() {
  const [ openMenu, setOpenMenu] = useState(false);
  const homeRef = useRef(null)
  const toogleMenu = ()=> {
    setOpenMenu(!openMenu);
  }

 
  const goToSection = ( refPage)=> {
    if(homeRef.current){
      switch(refPage){
        case 1: 
          homeRef.current.gotToHome();
          break;
        case 2: 
          homeRef.current.gotToTools();
          break;
        case 3:
          homeRef.current.goToProject();
          break;
        case 4:
          homeRef.current.gotToContact();
          break;
        default:
          break;
      }
      
    }
  }

  return (
    <BrowserRouter>
      <DataProvider>

        <div className='container'>

          <div className='toolbar'>

            <div className='isDesktop'>
              <Link className='link' onClick={()=> goToSection(1)}> Home </Link>
              <Link className='link' onClick={()=> goToSection(2)}> Habilidades</Link>
              <Link className='link' onClick={()=> goToSection(3)}> Portafolio</Link>
              <Link className='link' onClick={()=> goToSection(4)}>Contacto</Link>

            </div>

            <div className='section isMobil'>
              <FontAwesomeIcon icon={faBars} size='2x' className='toogle'  onClick={toogleMenu}/>
            </div>

          </div>

          <div className='menu' style={{ visibility: openMenu? 'visible' : 'hidden'}}>
            <div className='close'>
              <FontAwesomeIcon icon={faXmark} size='2x' className='close' style={{ cursor: 'pointer'}} onClick={toogleMenu}/>
            </div>
              
            <div className='sideContent'>
              <a >Habilidades</a>
              <a >Experiencia</a>
              <a >Portafolio</a>
              <a >Contacto</a>
            </div>
              
          </div>

          <div className='content'>
            <Home ref={homeRef}/>
          </div>

          <Footer  gotoHome={()=> goToSection(1)} gotoTool={()=> goToSection(2)} gotoProject={()=> goToSection(3)} gotoContact={()=> goToSection(4)}/>
        </div>
      </DataProvider>
      
    </BrowserRouter>
  )
}

export default App
