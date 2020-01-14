import React from 'react'
import './TechLogos.css'
import CSS3Pink from '../Images/Tech/CSS3Pink.png'
import html5Pink from '../Images/Tech/html5Pink.png'
import javascript from '../Images/Tech/javascript.png'
import Jquery from '../Images/Tech/Jquery.jpg'


function TechLogos() {
  return (
    <div className="projectTech">
        <img src={html5Pink} alt="fill in text" className="TechLogo" />
        <img src={CSS3Pink} alt="fill in text" className="TechLogo" />
        <img src={javascript} alt="fill in text" className="TechLogo" />
        <img src={Jquery} alt="fill in text" className="TechLogo" />
    </div>
    );
}

export default TechLogos;