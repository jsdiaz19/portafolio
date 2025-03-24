import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

            <div className="projects">
                {
                    projects.map((item)=> (
                        <div className='cardProject'>

                            <div className='legend'>
                                <img src={`/assets/${item.img}`}/>
                            </div>
                            
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <p>{item.descript }</p>
                            </div>
                            
                            <div className='footerCard'>
                                {
                                    item.tools.map((tool, index) => (
                                        <div className='lng'>
                                            { tool[2] ? <FontAwesomeIcon key={`${item.id}-tool${index}`} icon={tool[0]} color={tool[1]} size='2x'/> : tool[0]}
                                            <p>{tool[3]} </p>
                                        </div>
                                        
                                       
                                    ))
                                }
                            </div>

                            {
                                <div className='contButton'>
                                    { item.isPublic &&  <a href={item.url}>Visitar</a> }
                                </div>
                            }
                        </div>
                    ))
                }
                
            </div>
        </div>
     );
});


export default Projects;


{/* <div className='navigation'>
<FontAwesomeIcon icon={faAngleLeft} size='2x' className='btnVNav' onClick={scrollLeft}/>
<FontAwesomeIcon icon={faAngleRight} size='2x' className='btnVNav active' onClick={scrollRight}/>
</div>
<div className='contentProject' ref={carouselRef}>
{
    projects.map((item)=> (
        <div className='cardProject' key={item.id} >
            <div id='cardContent'>
                <h1>{item.title}</h1>
                <img src={`/assets/${item.img}`}/>

            </div>

            <div className='infoHover'>
                <div className='sectionHover izq'>{item.descript } </div>
                { item.url!='' &&  <div className='contLink' onClick={()=> goLink(item.url)} > <FontAwesomeIcon icon={faLink}  size='4x'/>  </div> }
                <div className='sectionHover der'>
                    {
                        item.tools.map((tool, index) => (
                            tool[2] ? <FontAwesomeIcon key={`${item.id}-tool${index}`} icon={tool[0]} color={tool[1]} size='2x'/> : tool[0]
                        ))
                    }
                </div>
            </div>
        </div>
    
    ))
}
</div> */}