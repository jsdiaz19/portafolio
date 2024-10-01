import './Contact.css'
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPhone, faLocationPin} from '@fortawesome/free-solid-svg-icons'
import { forwardRef } from 'react';

const Contact = forwardRef(function Contact(props, ref) {
    return ( 
        <div className="contact" ref={ref}>
            <div className='infoDiv'>
                <div className='brand'>Jonathan Diaz</div>
                <div className='socialNetwork'>
                    <FontAwesomeIcon icon={faGithub} size='2x'/>
                    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    <FontAwesomeIcon icon={faGoogle} size='2x'/>
                </div>
                
            </div>
            <div className='contactDiv'>
                <div className='lineContat'> 
                    <FontAwesomeIcon icon={faAt} />  
                    <p>jsdiaz19.jd@gmail.com </p>
                </div>

                <div className='lineContat'> 
                    <FontAwesomeIcon icon={faPhone} /> 
                    <p> +57 316-868-1208</p> 
                </div>
                <div className='lineContat'> 
                    <FontAwesomeIcon icon={faLocationPin} />
                    <p> Cali, Colombia </p>  
                </div>
            </div>
        </div>
     );
})

export default Contact;