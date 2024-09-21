
import './App.css'
import Home from './components/Home/Home';
import Tools from './components/Tools/Tools';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import  { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'; 
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  const [openMen, setOpenMen] = useState('hidden');

  const openMenu = ()=>{
    setOpenMen(openMen=== 'hidden' ? 'visible' : 'hidden');
  }

  const goToSection= (section)=>{
    window.location.hash= section;
    openMenu();
  }


  return (
    <>
      <div className='toolbar'>
        
        <div className='logo'>JD</div>

        <div className='toggle' onClick={openMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
      </div>

      <div className='menu' style={{ visibility: openMen}}>
        <div className='tabClose'>
          <FontAwesomeIcon icon={faClose} onClick={openMenu} size="3x" style={{ color: 'black', cursor: 'pointer' }}/>
        </div>

        <div className='contentMenu'>
          <p onClick={()=> goToSection('section1')}>Home</p>
          <p onClick={()=> goToSection('section2')}>Tecnologias</p>
          <p onClick={()=> goToSection('section3')}>Proyectos</p>
          <p onClick={()=> goToSection('section4')}>Contacto</p>
        </div>
      </div>

      <ReactFullpage
        licenseKey = {"OPEN-SOURCE-GPL"}
        scrollingSpeed = {1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className='content'>
                <div className="section"> <Home/></div>
                <div className="section"> <Tools /></div>
                <div className="section"> <Projects /></div>
                <div className="section"> <Footer /></div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      
    </>
  )
}

export default App
