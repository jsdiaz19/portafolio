import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const goToLink= (socialId)=> {
        let urlSocial;
        switch(socialId){
            case 1: // Github
                urlSocial='https://github.com/jsdiaz19';
                break;
            case 2: // Linkedin
                urlSocial='https://www.linkedin.com/in/jonatan-diaz-castillo';
                break;
            case 3: // Gmail
                urlSocial='mailto:jsdiaz19.jd@gmail.com';
                break;
            default:
                break;
        };
        window.location.href = urlSocial;
    }
    return ( 
        <div className='footer' id='section4'>
            <div className='textContact'>Contactame:</div>
            <div className='network'>
                <div className='cardNetwork' style={{ backgroundColor: '#333333', color:'white'}} onClick={()=> goToLink(1)}>
                    <p>Github</p>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className='cardNetwork' style={{ backgroundColor: '#0077B5', color:'white'}} onClick={()=> goToLink(2)}>
                    <p>Linkedin</p>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className='cardNetwork' style={{ backgroundColor: 'white', color:'black'}} onClick={()=> goToLink(3)}>
                    <p>Gmail</p>
                    <FontAwesomeIcon icon={faGoogle} />
                </div>
            </div>
        </div>
     );
}

export default Footer;