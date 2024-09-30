import './Tools.css'
import { faReact, faAngular, faNodeJs, faJs, faAndroid, faSwift, faCss3, faHtml5, faPhp, faGithub, faJira } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { forwardRef } from 'react';

const skills = [
    { name: 'React', logo: faReact, color:'#00d8ff'},
    { name: 'Angular', logo: faAngular, color:'#b63639'},
    { name: 'Nodejs', logo: faNodeJs, color:'#57a048'},
    { name: 'Javascript', logo: faJs, color:'#f4e225'},
    { name: 'Css', logo: faCss3, color:'#2d53e5'},
    { name: 'Html', logo: faHtml5, color:'#e4552d'},
    { name: 'Php', logo: faPhp, color:'#7b7fb5'},
    { name: 'Github', logo: faGithub, color:'#080808'},
    { name: 'Jira', logo: faJira, color:'#237cf5'},
    { name: 'Swfit', logo: faSwift, color:'#f1563e'},
    { name: 'Android', logo: faAndroid, color:'#38df88'}
]

const Tools = forwardRef(function Tools(props, ref) {
    return ( 
        <div className="toolPage" ref={ref}>
            <div className="line"></div>
            <h1 className='header'>HABILIDADES</h1>
            <div className='skillsContainer'>
                {
                    skills.map((item, counter)=> (
                        <div className='skill' key={counter}>
                            <FontAwesomeIcon icon={item.logo} size='3x' color={item.color}/>
                            <span>{item.name}</span>
                        </div>
                    ))
                }
            </div>
        </div>
     );
});

export default Tools;