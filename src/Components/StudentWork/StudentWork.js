import React, {Component} from 'react'
import './StudentWork.css'

import FactsArrows from '../../Images/OrgBio/FactsArrows.jpg'
//import GalleryTable from '../../Images/OrgBio/GalleryTable.jpg'
//import Habitat from '../../Images/OrgBio/Habitat.jpg'
import HomePage from '../../Images/OrgBio/HomePage.jpg'
import html5Pink from '../../Images/Tech/html5Pink.png'
import CSS3Pink from '../../Images/Tech/CSS3Pink.png'

class StudentWork extends Component {
    render() {
        return (
            <div className="StudentWork">
                <h2 className="sectionHead">Student Projects</h2>
                <h3 className="projTitle">Organismal Biology and Technology Tutoring</h3>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <a href="http://bioweb.uwlax.edu/bio203/f2013/kujala_elis/index.htm" target="_blank" rel="noopener noreferrer"><img src={HomePage} alt="Home Page for biology class website on Honey pot ant" className="projImage"/></a>
                        <br/>
                        <img src={FactsArrows} alt="Image of secondary navigation arrows" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>Honey Pot Ant Site for Organismal Biology Fall 2013</p>
                        <p>This website was create as part of the Organismal Biology class I took during the fall of 2013. 
                            For this project we used primary sources to write the content of the site and requested permission 
                            from the photographer to use his photographs. This website was created from a template adding 
                            HTML tags and pages as needed, then editing the CSS to fit our desired theme. Working with my partner
                            I provided half of the text content and did most of the HTML and CSS editing on our site.
                        </p>
                        <p>To help support students with this project and projects from other classes The Technology Learning Cadre
                             was established. While working on this project the peer tutors noticed I excelled at the technology side 
                             of the project and recommended I apply for their open tutor position. I officially joined as a Technology 
                             Tutor in the Spring Semester 2014 and worked with them until the Cadre was dissolved at the end of the Fall
                             2015 semester. 
                        </p>
                        <div className="projectTech">
                            <img src={html5Pink} alt="HTML5 Logo" className="TechLogo" />
                            <img src={CSS3Pink} alt="CSS3 Logo" className="TechLogo" />
                        </div>
                        <p className="projLinks">Check it out : <a href="http://bioweb.uwlax.edu/bio203/f2013/kujala_elis/index.htm" className="pageLink" target="_blank" rel="noopener noreferrer">Live</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default StudentWork