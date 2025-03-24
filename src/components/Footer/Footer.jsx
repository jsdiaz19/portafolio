import './Footer.css';
import { Link } from 'react-router-dom';

function Footer({gotoHome, gotoTool, gotoProject, gotoContact}) { 


    return ( 
        <div className='footer' >
            Creado por Jonathan Diaz
        </div>
     );
};

export default Footer;