import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import Menu from './Components/Menu/Menu'
import MenuButton from './Components/MenuButton/MenuButton'
import MenuItem from './Components/MenuItem/MenuItem'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }
  
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  renderNavRoutes() {
    return (
      <>
        {['/', '/home'].map(path => (
          <Route 
            exact
            key={path}
            path={path}
            component={Home}
          />
        ))}
        <Route path='/aboutMe' component={AboutMe} />
        <Route path='/projects' component={Projects} />
      </>
    );
  }
  
  render(){
    const menu = ['Home', 'About Me','Projects']
    const menuId = ['/home', '/aboutMe', '/projects']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index}
          to={menuId[index]} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>
            {val}
        </MenuItem>
      )
    });
  
    return(
      <>
      {this.renderNavRoutes()}
    
      <div className="App">
        <title>Kathryn A. Goodreau</title>
        <div className="container">
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='RGB(248, 211, 218)'/>
          <div className="logo">Kathryn A. Goodreau</div>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
        <Footer />
      </div>
      </>
    )
  }
}

export default App;