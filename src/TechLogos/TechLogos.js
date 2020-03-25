import React from 'react'
import './TechLogos.css'
import CSS3Pink from '../Images/Tech/CSS3Pink.png'
import html5Pink from '../Images/Tech/html5Pink.png'
import javascript from '../Images/Tech/javascript.png'
//import Jquery from '../Images/Tech/Jquery.jpg'
import node from '../Images/Tech/node.png'
import Postgres from '../Images/Tech/Postgres.png'
import react from '../Images/Tech/React.png'


function TechLogos() {
  return (
    <div className="projectTech">
        <img src={html5Pink} alt="HTML 5 Logo" className="TechLogo" />
        <img src={CSS3Pink} alt="CSS 3 Logo" className="TechLogo" />
        <img src={javascript} alt="javascript Logo" className="TechLogo" />
        <img src={react} alt="React js Logo" className="TechLogo" />
        <img src={node} alt="Node js Logo" className="TechLogo" />
        <img src={Postgres} alt="Postgres Logo" className="TechLogo" />
    </div>
    );
}

export default TechLogos;