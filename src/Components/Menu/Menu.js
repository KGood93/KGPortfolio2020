import React, {Component} from 'react'
import './Menu.css'

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
          open: this.props.open? this.props.open:false,
        }
    }
     
    //Update due to rename
    componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
          this.setState({open:nextProps.open});
        }
    }
      
    render(){
        return(
          <div className="menuContainer">
            {
              this.state.open?
                <div className="menuList">
                  {this.props.children}
                </div>:null
            }
          </div>
        )
    }
}

export default Menu