

import './Home.css';
import Tool from './Tools/Tools';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { getDownloadFile } from '../../FirebaseConfig';
import { forwardRef, useImperativeHandle, useRef } from 'react';

const Home = forwardRef( function Home(props, ref) {
    const HomeRef= useRef(null);
    const toolRef= useRef(null);
    const projectRef= useRef(null);
    const contactRef= useRef(null);

    const downloadCV= async()=> {
        const url = await getDownloadFile('CV/JONATHAN DIAZ - ES.pdf');
        window.open(url,'_blank');
    } 

    useImperativeHandle(ref, ()=> {
        return {
            gotToHome: ()=> HomeRef.current.scrollIntoView({ behavior: 'smooth' }),
            gotToTools: ()=> toolRef.current.scrollIntoView({ behavior: 'smooth' }),
            goToProject: ()=> projectRef.current.scrollIntoView({ behavior: 'smooth' }),
            gotToContact: ()=> contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    })
    return ( 
        <>
            <div className='flexContent' ref={HomeRef}>
                <div className='infoHome'>
                    <div className='line'></div>
                    <h1>JONATHAN DIAZ</h1>
                    <span> Desarrollador frontend especializado en crear experiencias web dinámicas y responsivas </span>
                    <button className='btnCV' onClick={downloadCV} >Descargar CV</button>
                </div>
                <div>
                    <span className='signature'>Jonathan D.</span>
                </div>
            </div>
            <Tool  ref={toolRef}/>
            <Projects ref={projectRef}/>
            <Contact ref={contactRef}/>
        </>
     );
})


export default Home;