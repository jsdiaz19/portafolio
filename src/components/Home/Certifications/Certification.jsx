import { forwardRef, useContext } from 'react';
import { dataContext } from '../../../context/dataContext';
import './Certification.scss';

const Certifications = forwardRef(function Certifications(props, ref) {
    const {certifications} = useContext(dataContext);
    return ( 
        <div className="certf" ref={ref}>
            <h1>Certificados</h1>
            <ul>
                {
                    certifications.map((cert, index) => (
                        <li key={index} className="cardStudy">
                            { cert.status==1 && <a href={cert.link} target="_blank"> {cert.title} </a> }
                            { cert.status==0 && <span> {cert.title} </span> }
                            <p> {cert.status == 1 ? 'Terminado' : 'En curso' } </p>
                            <p className="text-sm text-gray-600">{cert.provider} - {cert.year}</p>
                        </li>
                ))}
          </ul>
        </div>
     );
});

export default Certifications;