import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
import InsightText from './InsightText.js'
import HomeRefugee from "./HomeRefugee.jpeg";

function Home() {
  return (
    <div className="board">
         <div className="board-left">
         <div className='title'>
                REFUGEE ADVOCATES
            </div>
            <Link  className="link" to="/information"> Learn More</Link>
            </div>
         <div className="board-right">
            <div className="image">
                <img src={HomeRefugee} alt="react logo" />
            </div>
        </div>
    </div>
  );
}

export default Home;
