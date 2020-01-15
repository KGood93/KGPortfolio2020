import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './MenuItem.css'

class MenuItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      return(
        <div className="menuDiv">
          <Link 
            className='menuItem'
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
            to={this.props.to}
          >
            {this.props.children}  
          </Link>
        <div className="line"/>
      </div>  
      )
    }
}

export default MenuItem