import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'; 
import manufacturas from '../../assets/manufacturas.png';

function Projects() {
    const listProjects = [
        { title: 'Manufacturas Vanessa', descript: 'Descripcion.....', img: '', url: 'https://funny-panda-f579cf.netlify.app/'}
    ];
    const goToLink = (url)=>{
        window.open(url,'_blank');
    }

    return ( 
        <div className="contentPage order" id='section3'>
            <div className="header">MIS PROYECTOS</div>
            <div className='project'>
                {
                    listProjects.map((item, index)=> (
                        <div className='cardProject' key={index}>
                            <img src={manufacturas}/>
                            <p className='tittle'>{item.title}</p>
                            <p>{item.descript}</p>
                            <div >
                                <FontAwesomeIcon icon={faGlobe} style={{ cursor: 'pointer'}} onClick={()=> goToLink(item.url)}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default Projects;