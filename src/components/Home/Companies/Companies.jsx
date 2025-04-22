import './Companies.scss'
import { forwardRef } from 'react';

const companiesLogo= [
    'bpm.png',
    'ofiled.jpg',
    'myl.png',
    'victorum.png'
]
const Companies= forwardRef(function Companies(props, ref) {
    return ( 
        <div className='companiesContainer' ref={ref}>
            <h2>Me enorgullece haber colaborado con grandes empresas:</h2>
            <div className='companies'>
                {
                    companiesLogo.map((logo, index) => (
                        <div className='compContainer' key={index}>
                            <img src={`/assets/${logo}`}/>
                        </div>
                    ))
                }
            </div>
        </div>
     );
});

export default Companies;