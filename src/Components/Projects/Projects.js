import React, {Component} from 'react'
import './Projects.css'

import FiberFrenzyQuestion from '../../Images/FiberFrenzy/FiberFrenzyQuestion.jpg'
import Portfolio_HomeSmall from '../../Images/FiberFrenzy/Portfolio_HomeSmall.jpg'
import ElusiveEatsRestaurant from '../../Images/EEScreenShots/ElusiveEatsRestaurants.png'
import ElusiveEatsStart from '../../Images/EEScreenShots/ElusiveEatsStart.png'
import ElusiveEatsZip from '../../Images/EEScreenShots/ElusiveEatsZip.png'
import MeetingSelection from '../../Images/CircleStats/MeetingSelection.jpg'
import LaunchPrev from '../../Images/CircleStats/LaunchPrev.jpg'
import Count1 from '../../Images/CircleStats/Count1.jpg'
import Count2 from '../../Images/CircleStats/Count2.jpg'
import StatsPage from '../../Images/CircleStats/StatsPage.jpg'
import Journal from '../../Images/Sparkle/Journal.jpg'
import AddEntry from '../../Images/Sparkle/AddEntry.jpg'
import ShortEntry from '../../Images/Sparkle/ShortEntry.jpg'
import CSS3Pink from '../../Images/Tech/CSS3Pink.png'
import html5Pink from '../../Images/Tech/html5Pink.png'
import Jquery from '../../Images/Tech/Jquery.jpg'
import javascript from '../../Images/Tech/javascript.png'
import react from '../../Images/Tech/React.png'
import postgres from '../../Images/Tech/Postgres.png'
import node from '../../Images/Tech/node.png'

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h2 className="sectionHead">My Projects</h2>
                <h3 className="projTitle">Circle Time Stats</h3>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <a href="https://circle-stats-app.goodreaukath.now.sh/" target="_blank" rel="noopener noreferrer"><img src={MeetingSelection} alt="Meetup Selection Page from Circle Time Stats" className="projImage"/></a>
                        <br/>
                        <img src={LaunchPrev} alt="Launch Page of Circle Time Stats" className="projImage"/>
                        <br/>
                        <img src={Count1} alt="Top of Count Page for Circle Time Stats" className="projImage"/>
                        <br/>
                        <img src={Count2} alt="Bottom of Count Page for Circle Time Stats" className="projImage"/>
                        <br/>
                        <img src={StatsPage} alt="Stats Page for Circle Time Stats" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>Circle Time Stats is an easy way to keep track of the attendance for meetup events.</p>
                        <p>Developed for a meetup I volunteer. A simple and easy way to count attendees as they
                            arrive and elegantly display the resulting data. This is the second full-stack project 
                            developed as part of the Thinkful Engineering Flex Program.</p>
                        <div className="projectTech">
                            <img src={html5Pink} alt="HTML 5 Logo" className="TechLogo" />
                            <img src={CSS3Pink} alt="CSS 3 Logo" className="TechLogo" />
                            <img src={javascript} alt="javascript Logo" className="TechLogo" />
                            <img src={react} alt="React js Logo" className="TechLogo" />
                            <img src={node} alt="Node js Logo" className="TechLogo" />
                            <img src={postgres} alt="Postgres Logo" className="TechLogo" />
                        </div>
                        <p className="projLinks">Check it out : <a href="https://circle-stats-app.goodreaukath.now.sh/" className="pageLink" target="_blank" rel="noopener noreferrer">Live</a>, 
                            <a href="https://github.com/KGood93/circle-stats-app" className="pageLink" target="_blank" rel="noopener noreferrer">App Repo</a> or 
                            <a href="https://github.com/KGood93/circle-stats-api" className="pageLink" target="_blank" rel="noopener noreferrer">API Repo</a></p>
                    </div>
                </div>
                <h3 className="projTitle">Sparkle</h3>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <a href="https://sparkle-app.now.sh/" target="_blank" rel="noopener noreferrer"><img src={Journal} alt="Journal page of Sparkle" className="projImage"/></a>
                        <br/>
                        <img src={AddEntry} alt="Add Entry Page of Sparkle" className="projImage"/>
                        <br/>
                        <img src={ShortEntry} alt="Entry Page of Sparkle" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>Sparkle is a motivational journaling app to help inspire you to shine.</p>
                        <p>Everyone needs a little motivation sometimes. Sparkle is a journaling 
                            app which encourages you to reflect on a motivational quote to bring 
                            out the best of you. This was the first of two full-stack projects as
                            part of the Thinkful Engineering Flex Program.</p>
                        <div className="projectTech">
                            <img src={html5Pink} alt="HTML 5 Logo" className="TechLogo" />
                            <img src={CSS3Pink} alt="CSS 3 Logo" className="TechLogo" />
                            <img src={javascript} alt="javascript Logo" className="TechLogo" />
                            <img src={react} alt="React js Logo" className="TechLogo" />
                            <img src={node} alt="Node js Logo" className="TechLogo" />
                            <img src={postgres} alt="Postgres Logo" className="TechLogo" />
                        </div>
                        <p className="projLinks">Check it out : <a href="https://sparkle-app.now.sh/" className="pageLink" target="_blank" rel="noopener noreferrer">Live</a> ,
                            <a href="https://github.com/KGood93/sparkle-app" className="pageLink" target="_blank" rel="noopener noreferrer">App Repo</a> or 
                            <a href="https://github.com/KGood93/sparkle-api" className="pageLink" target="_blank" rel="noopener noreferrer">API Repo</a></p>
                    </div>
                </div>
                <h3 className="projTitle">Elusive Eats</h3>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <a href="https://kgood93.github.io/ElusiveEats/" target="_blank" rel="noopener noreferrer"><img src={ElusiveEatsStart} alt="Start page of ElusiveEats" className="projImage"/></a>
                        <br/>
                        <img src={ElusiveEatsZip} alt="Zipcode Search Page of Elusive Eats" className="projImage"/>
                        <br/>
                        <img src={ElusiveEatsRestaurant} alt="Map and restaurant list" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>An app to answer the question of what to eat when it eludes you.</p>
                        <p>This app uses several google APIs to help find a list of restaurants close 
                            to your current location. It then displays the list with a map and reviews
                             to help you decide where to eat. </p>
                        <div className="projectTech">
                            <img src={html5Pink} alt="fill in text" className="TechLogo" />
                            <img src={CSS3Pink} alt="fill in text" className="TechLogo" />
                            <img src={javascript} alt="fill in text" className="TechLogo" />
                            <img src={Jquery} alt="fill in text" className="TechLogo" />
                        </div>
                        <p className="projLinks">Check it out : <a href="https://kgood93.github.io/ElusiveEats/" className="pageLink" target="_blank" rel="noopener noreferrer">Live</a> or <a href="https://github.com/KGood93/ElusiveEats" className="pageLink" target="_blank" rel="noopener noreferrer">Repo</a></p>
                    </div>
                </div>
                <h3 className="projTitle">The Covert Knitter presents: Fiber Frenzy</h3>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <a href="https://kgood93.github.io/FiberFrenzy/" target="_blank" rel="noopener noreferrer"><img src={Portfolio_HomeSmall} alt="Start page of Fiber Frenzy Quiz" className="projImage"/></a>
                        <br/>
                        <img src={FiberFrenzyQuestion} alt="Example of question in Fiber Frenzy" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>A quiz app for the fiber/knitting enthusiast</p>
                        <p>Test your knowledge of knitting and all things fiber related with this 
                            fun quiz! This app will keep track of progress in the quiz on the 
                            “Clover Counter”. Each correct answer will earn yarn for your “stash”.</p>
                        <div className="projectTech">
                            <img src={html5Pink} alt="fill in text" className="TechLogo" />
                            <img src={CSS3Pink} alt="fill in text" className="TechLogo" />
                            <img src={javascript} alt="fill in text" className="TechLogo" />
                            <img src={Jquery} alt="fill in text" className="TechLogo" />
                        </div>
                        <p className="projLinks">Check it out : <a href="https://kgood93.github.io/FiberFrenzy/" className="pageLink" target="_blank" rel="noopener noreferrer">Live</a> or <a href="https://github.com/KGood93/FiberFrenzy" className="pageLink" target="_blank" rel="noopener noreferrer">Repo</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects