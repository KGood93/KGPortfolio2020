import React, {Component} from 'react'
import KatyBackground from '../../Images/Katy/KatyBackground.jpg'
import KatyPicSmall from '../../Images/Katy/KatyPicSmall.jpg'
import FiberFrenzy from '../../Images/FiberFrenzy/Portfolio_HomeSmall.jpg'
import './Home.css'
import TechLogos from '../../TechLogos/TechLogos'


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <img src={KatyBackground} alt="Kathryn to right in front of Milwaukee River" className="introImage"/>
                <img src={KatyPicSmall} alt="Kathryn wearing jeans white top and green jacket" className="headshot"/>
                <div className="headline">
                    <h3>Hi, I’m Kathryn! I am a full stack developer.</h3>
                </div>
                <div className="totalBio">
                    <div className="katyImage"><p>Headshot picture of me</p></div>
                    <div className="bio">
                        <p>I have a passion for learning and I'm in the Engineering Flex program 
                            through Thinkful. I fell in love with coding in high school and recently
                            decided to pursue a career in technology. I have  predominantly worked 
                            with HTML and CSS. During my undergraduate career I also took several 
                            semesters of computer science courses focusing on Java and Python. I am currently 
                            learning backend development with a focus on SQL and Node.js.
                        </p>
                    </div>
                </div>
                <h2 className="sectionHead">My Projects</h2>
                <div className="projects">
                    <img src={FiberFrenzy} alt="Start page of Fiber Frenzy Quiz" className="fiberFrenzy"/>
                    <div className="projectInfo">
                        <h3>The Covert Knitter presents: Fiber Frenzy</h3>
                        <p>A quiz app for the fiber/knitting enthusiast.</p>
                        <TechLogos />
                        <p className="gitLinks">Check it out : <a href="https://kgood93.github.io/FiberFrenzy/" className="pageLink" target="_blank" rel="noopener noreferrer">Live</a> or <a href="https://github.com/KGood93/FiberFrenzy" className="pageLink" target="_blank" rel="noopener noreferrer">Repo</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home