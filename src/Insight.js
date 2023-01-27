import React from 'react';
import "./Insight.css"

function Insight(props) {
  return (
    <div className="insight">
        <div className="insight-text">
                {props.paragraphs.map(p => {
                    return  <div className="paragraph">{p}</div>
                })}
        </div>
     </div>
  );
}

export default Insight;
