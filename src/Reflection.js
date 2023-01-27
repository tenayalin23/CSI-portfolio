import React from 'react';
import "./Reflection.css"
import ReflectionDiagram from "./ReflectionDiagram.png";

function Reflection (props) {
  return (
    <div className="Reflection">
        <div className="reflection-title"> Journey Map: Connecting Multiple Experiences </div>
        <div className="reflection-label"> {props.title} </div>
        <div className="diagram">
            <img src={ReflectionDiagram} alt="react logo" />
        </div>
        <div className="reflection-text">
                {props.paragraphs.map(p => {
                    return  <div className="paragraph">{p}</div>
                })}
        </div>
     </div>
  );
}

export default Reflection;