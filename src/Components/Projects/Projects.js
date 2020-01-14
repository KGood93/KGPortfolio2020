import React, {Component} from 'react'
import Content from '../Content'

class Projects extends Component {
    render() {
        return (
            <Content className="Projects">
                <h2 className="sectionHead">My Projects</h2>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <h3>The Covert Knitter presents: Fiber Frenzy</h3>
                        <a href="https://github.com/KGood93/KGPortfolio"><img src="Portfolio_HomeSmall.jpg" alt="Start page of Fiber Frenzy Quiz" class="projImage"/></a>
                        <br/>
                        <img src="FiberFrenzyQuestion.jpg" alt="Example of question in Fiber Frenzy" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>A quiz app for the fiber/knitting enthusiast</p>
                        <div className="projectTech">
                            <img src="html5Pink.png" alt="fill in text" className="TechLogo" />
                            <img src="CSS3Pink.png" alt="fill in text" className="TechLogo" />
                            <img src="javascript.png" alt="fill in text" className="TechLogo" />
                            <img src="Jquery.jpg" alt="fill in text" className="TechLogo" />
                        </div>
                        <p>Check it out : <a href="https://kgood93.github.io/FiberFrenzy/">Live</a> or <a href="https://github.com/KGood93/FiberFrenzy">Repo</a></p>
                    </div>
                </div>
                <div className="projectsPage">
                    <div className="projectScreenShots">
                        <h3>Elusive Eats</h3>
                        <a href="https://kgood93.github.io/ElusiveEats/"><img src="EEScreenShots/ElusiveEatsStart.png" alt="Start page of ElusiveEats" class="projImage"/></a>
                        <br/>
                        <img src="EEScreenShots/ElusiveEatsZip.png" alt="Zipcode Search Page of Elusive Eats" className="projImage"/>
                        <br/>
                        <img src="EEScreenShots/ElusiveEatsRestaurants.png" alt="Map and restaurant list" className="projImage"/>
                    </div>
                    <div className="projInfo">
                        <p>An app to answer the question of what to <br /> eat when it eludes you.</p>
                        <div className="projectTech">
                            <img src="html5Pink.png" alt="fill in text" className="TechLogo" />
                            <img src="CSS3Pink.png" alt="fill in text" className="TechLogo" />
                            <img src="javascript.png" alt="fill in text" className="TechLogo" />
                            <img src="Jquery.jpg" alt="fill in text" className="TechLogo" />
                        </div>
                        <p>Check it out : <a href="https://kgood93.github.io/ElusiveEats/">Live</a> or <a href="https://github.com/KGood93/ElusiveEats">Repo</a></p>
                    </div>
                </div>
            </Content>
        )
    }
}

export default Projects