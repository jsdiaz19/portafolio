import { createContext } from "react";
export const dataContext = createContext();
import { faAngular, faNodeJs, faReact, faAndroid, faSwift } from '@fortawesome/free-brands-svg-icons';

export const DataProvider= ({ children }) => {

    const projects =  [
        { 
            title: 'Optimax', 
            descript: 'Este proyecto realiza pruebas visuales y su respectivo diagnostico', 
            img: 'optimax.png', 
            url: '',
            isPublic: false,
            tools: [ [faAngular,'#c4002b'], [faNodeJs,'green']]
        },
        { 
            title: 'Manufacturas Vanessa', 
            descript: 'Página web de calzado donde los usuarios pueden registrarse, realizar pedidos de productos y acceder a ofertas y promociones exclusivas', 
            img: 'manufacturas.png', 
            url: 'https://funny-panda-f579cf.netlify.app/',
            isPublic: true,
            tools: [ [faAngular,'#c4002b'], [faNodeJs,'green']]
        },
        { 
            title: 'CMS', 
            descript: 'Sistema de administracion para procesos internos(gestion de usuarios, guardaspaldas y servicios)', 
            img: 'cms.png', 
            url: '',
            isPublic: false,
            tools: [ [faReact,'#08d8fe'], [faNodeJs,'green'] ]
        },
        { 
            title: 'Custos', 
            descript: 'Aplicativo movil para solicitar servicio de escoltas', 
            img: 'custos.png', 
            url: '',
            isPublic: true,
            tools: [ [faAndroid,'#38df88'], [faSwift,'#f1563e'] ]
        }
    ];

    return ( 
        <dataContext.Provider value={ { projects }}>
            { children }
        </dataContext.Provider>
     );
}
