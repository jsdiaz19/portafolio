

import './Home.scss';
import Tool from './Tools/Tools';
import Projects from './Projects/Projects';
import Companies from './Companies/Companies';
import Certifications from './Certifications/Certification';
import { getDownloadFile } from '../../FirebaseConfig';
import { forwardRef, useImperativeHandle, useRef, useState} from 'react';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = forwardRef( function Home(props, ref) {
    const HomeRef= useRef(null);
    const toolRef= useRef(null);
    const projectRef= useRef(null);
    const companiesRef= useRef(null);
    const certifRef = useRef(null);
    const menuRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const downloadCV= async()=> {
        const url = await getDownloadFile('CV/JONATHAN DIAZ - ES.pdf');
        window.open(url,'_blank');
    } 

    useImperativeHandle(ref, ()=> {
        return {
            gotToHome: ()=> HomeRef.current.scrollIntoView({ behavior: 'smooth' }),
            gotToTools: ()=> toolRef.current.scrollIntoView({ behavior: 'smooth' }),
            goToProject: ()=> projectRef.current.scrollIntoView({ behavior: 'smooth' }),
            gotToCompanies: ()=> companiesRef.current.scrollIntoView({ behavior: 'smooth' }),
            gotToCertif: ()=> certifRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    })

    const goTo = (network)=> {
        console.log(network);
        switch(network){
            case 'linkedin':
                window.open('https://www.linkedin.com/in/jonatandiaz-dev');
                break;
            case 'whatsapp':
                window.open('https://api.whatsapp.com/send/?phone=573168681208&text&type=phone_number&app_absent=0');
                break;
            case 'email':
                window.open('mailto:jsdiaz19.jd@gmail.com');
                break;
            default: 
                break;
        }
    }
    return ( 
        <>
            <div className='flexContent' ref={HomeRef}>
                <div className='infoHome'>
                    <div className='line'></div>
                    <h1>JONATHAN DIAZ</h1>
                    <span> Desarrollador frontend especializado en crear experiencias web dinámicas y responsivas </span>
                    <button className='btnCV' onClick={downloadCV} >Descargar CV</button>

                    <div className='sectionBtn'>
                        <div onClick={()=> goTo('linkedin')}>
                            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                        </div>
                        <div onClick={()=> goTo('email')}>
                            <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                        </div>
                        <div onClick={()=> goTo('whatsapp')}>
                            <FontAwesomeIcon icon={faWhatsapp} size='2x'/>
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                    <span className='signature'>Jonathan D.</span>
                </div>
                
            </div>
            <Tool  ref={toolRef}/>
            <Projects ref={projectRef}/>
            <Certifications ref={certifRef}/>
            <Companies ref={companiesRef}/>
                    
        </>
     );
})


export default Home;