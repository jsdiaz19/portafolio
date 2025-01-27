import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft, faPlay, faLink } from '@fortawesome/free-solid-svg-icons'; 
import { dataContext } from '../../../context/dataContext';
import { useContext, useRef, forwardRef } from 'react';


const Projects = forwardRef(function Projects(props, ref) {
    const {projects} = useContext(dataContext);
    const carouselRef = useRef(null);

    const scrollRight = ()=> {
        if( carouselRef.current){
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth / 2;
        }
    }

    const scrollLeft = ()=> {
        if( carouselRef.current){
            carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth / 2;
        }
    }

    const goLink = (link)=> {
        window.open(link, '__blank_')
    }
    return ( 
        <div className='projectContainer' ref={ref}>
            <h1 className='header'>PROYECTOS</h1>
            <div className='navigation'>
                <FontAwesomeIcon icon={faAngleLeft} size='2x' className='btnVNav' onClick={scrollLeft}/>
                <FontAwesomeIcon icon={faAngleRight} size='2x' className='btnVNav active' onClick={scrollRight}/>
            </div>
            <div className='contentProject' ref={carouselRef}>
                {
                    projects.map((item, index)=> (
                        <div className='cardProject' key={index} >
                            <div id='cardContent'>
                                <h1>{item.title}</h1>
                                <img src={`/assets/${item.img}`}/>
                                <div className='barAction'>
                                    { item.isPublic && <FontAwesomeIcon icon={faPlay} className='btnAct'/>}
                                </div>
                            </div>

                            <div className='infoHover'>
                                <div className='sectionHover izq'>{item.descript } </div>
                                { item.url!='' &&  <div className='contLink' onClick={()=> goLink(item.url)} > <FontAwesomeIcon icon={faLink}  size='4x'/>  </div> }
                                <div className='sectionHover der'>
                                    {
                                        item.tools.map((tool, index) => (
                                            tool[2] ? <FontAwesomeIcon key={index} icon={tool[0]} color={tool[1]} size='2x'/> : tool[0]
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    
                    ))
                }
            </div>

        </div>
     );
});


export default Projects;