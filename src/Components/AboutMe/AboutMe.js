import React, {Component} from 'react'
import Content from '../Content.js'
import './AboutMe.css'
import KatyPicSmall from '../../Images/Katy/KatyPicSmall.jpg'

class AboutMe extends Component {
    render() {
        return (
            //<Content>
                <div className="AboutMe">
                <img src={KatyPicSmall} alt="Kathryn wearing jeans white top and green jacket" className="bioPage"/>
                <div className="aboutBio">
                    <h3 className="bioGreeting">Hi Everyone,</h3>  
                    <p className="bioGraph">My name is Kathryn and I am a Full Stack Developer. I have a 
                        passion for learning and I'm in the Full Stack Flex program through Thinkful. I fell 
                        in love with coding in high school and recently decided to pursue it 
                        full-time. I have predominantly worked with HTML and CSS.  During my 
                        undergraduate career I took several semesters of computer science courses 
                        focusing on Java and Python. Some of my favorite things to work on are 
                        algorithm development and complex data structures. I am currently learning 
                        JavaScript and JQuery.
                    </p>
                    <p className="bioGraph">My bachelor's degree is in biology with a focus on cell and molecular
                        biology. I currently work in a research lab in the Milwaukee area. I the research I have 
                        assisted with I have always loved pulling in mathematical and computer models 
                        which is how I was able to incorporate computer science courses into my schedule. 
                    </p>    
                    <p className="bioGraph">In my spare time I love knitting and all things fiber related. I also
                        enjoy blogging, binging podcasts, tennis and going snowboarding.
                    </p>
                    <h4 className="centerLinks">Links of Interest</h4>
                    <p className="center"><a href="https://github.com/KGood93">Github</a></p>  
                    <p className="center"><a href="https://www.linkedin.com/in/kathryn-goodreau-6a18b4114">LinkedIn</a></p>
                    <h3 className="close">Thanks for Stopping By,</h3>
                    <h3 className="close">Kathryn</h3>    
                </div>
            </div>
            //</Content>
        )
    }
}

export default AboutMe