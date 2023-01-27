import React from 'react';
import './Persona.css'
import PersonaNav from './PersonaNav';

function Persona(props) {
    return (
        <div>
            <div className="persona">
                <PersonaNav />
                <div className='persona-name'>{props.name}</div>
                <div className="persona-image">
                    <img src={props.imgUrl} />
                </div>
            </div>
        </div>
     );

}

export default Persona