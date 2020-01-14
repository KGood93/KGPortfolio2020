import React, {Component} from 'react'
import Content from '../Content'
import './Projects.css'

import FiberFrenzyQuestion from '../../Images/FiberFrenzy/FiberFrenzyQuestion.jpg'
import Portfolio_HomeSmall from '../../Images/FiberFrenzy/Portfolio_HomeSmall.jpg'
import ElusiveEatsRestaurant from '../../Images/EEScreenShots/ElusiveEatsRestaurants.png'
import ElusiveEatsStart from '../../Images/EEScreenShots/ElusiveEatsStart.png'
import ElusiveEatsZip from '../../Images/EEScreenShots/ElusiveEatsZip.png'
import CSS3Pink from '../../Images/Tech/CSS3Pink.png'
import html5Pink from '../../Images/Tech/html5Pink.png'
import javascript from '../../Images/Tech/javascript.png'
import Jquery from '../../Images/Tech/Jquery.jpg'

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h2 className="sectionHead">My Projects</h2>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <h3 className="projTitle">The Covert Knitter presents: Fiber Frenzy</h3>
                        <a href="https://github.com/KGood93/KGPortfolio"><img src={Portfolio_HomeSmall} alt="Start page of Fiber Frenzy Quiz" class="projImage"/></a>
                        <br/>
                        <img src={FiberFrenzyQuestion} alt="Example of question in Fiber Frenzy" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>A quiz app for the fiber/knitting enthusiast</p>
                        <div className="projectTech">
                            <img src={html5Pink} alt="fill in text" className="TechLogo" />
                            <img src={CSS3Pink} alt="fill in text" className="TechLogo" />
                            <img src={javascript} alt="fill in text" className="TechLogo" />
                            <img src={Jquery} alt="fill in text" className="TechLogo" />
                        </div>
                        <p className="projLinks">Check it out : <a href="https://kgood93.github.io/FiberFrenzy/">Live</a> or <a href="https://github.com/KGood93/FiberFrenzy">Repo</a></p>
                    </div>
                </div>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <h3 className="projTitle">Elusive Eats</h3>
                        <a href="https://kgood93.github.io/ElusiveEats/"><img src={ElusiveEatsStart} alt="Start page of ElusiveEats" class="projImage"/></a>
                        <br/>
                        <img src={ElusiveEatsZip} alt="Zipcode Search Page of Elusive Eats" className="projImage"/>
                        <br/>
                        <img src={ElusiveEatsRestaurant} alt="Map and restaurant list" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>An app to answer the question of what to <br /> eat when it eludes you.</p>
                        <div className="projectTech">
                            <img src={html5Pink} alt="fill in text" className="TechLogo" />
                            <img src={CSS3Pink} alt="fill in text" className="TechLogo" />
                            <img src={javascript} alt="fill in text" className="TechLogo" />
                            <img src={Jquery} alt="fill in text" className="TechLogo" />
                        </div>
                        <p className="projLinks">Check it out : <a href="https://kgood93.github.io/ElusiveEats/">Live</a> or <a href="https://github.com/KGood93/ElusiveEats">Repo</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects