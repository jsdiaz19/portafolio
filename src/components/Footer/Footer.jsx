import './Footer.css';
import { Link } from 'react-router-dom';

function Footer({gotoHome, gotoTool, gotoProject, gotoContact}) { 


    return ( 
        <div className='footer' >
            <div className='linkFooter'>
                <Link className='link' onClick={gotoHome}> Home </Link>
                <Link className='link' onClick={gotoTool}> Habilidades </Link>
                <Link className='link' onClick={gotoProject}> Portafolio</Link>
                <Link className='link' onClick={gotoContact}>Contacto</Link>
            </div>
            <div>Creado por Jonathan Diaz</div>
        </div>
     );
};

export default Footer;