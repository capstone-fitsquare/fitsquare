import React, { Component } from 'react';
//import {MdPerson} from 'react-icons/lib/md';
import {withRouter,Link} from 'react-router-dom'
import {TiShoppingCart,TiUserOutline} from 'react-icons/lib/ti';
import { Input, Icon, Modal, Header, Dropdown,Label} from 'semantic-ui-react'

import {Login} from './index'

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalOpen: false,
			dropdown: false
		};
	}
	render() {
		const { history, user, loggedIn, logout} = this.props
		return (
      <div>
			  <div style={colorbar}/>
        <div style={navItemContainer}>
          <h1 style={fitSquare}>     fitSquare</h1>
          <h4 id="login-btn" style={button} onClick={() => history.push('/login')}>Log In / Sign up</h4>
        </div>
      </div>
    )
  }
}


export default withRouter(Navbar)

const styles = {
  colorbar: {
    position: 'fixed',
    width: '100%',
    height: '12px',
    background: 'linear-gradient(to left, #90EE90 0%, #00ffd2 70%)',
  },
	container: {
    display: 'flex',
    flexDirection: 'column',
    // background: 'linear-gradient(to left, #90EE90 0%, #00ffd2 70%)',
    background: 'white',
    color: "#00fcce",
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)',
    marginBottom: '1.5px'
    // borderBottom: '2px solid #74e0cc'
  },
  navItemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)'
  },
  fitSquare: {
    display: 'flex',
    padding: '1em',
    margin: '0 1em',
    letterSpacing: '4px'
  },
  button: {
    display: 'flex',
    margin: '0 3em',
    padding: '.7em 1.2em',
    // background: '#fdf700',
    borderRadius: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)'
  }
}
const { colorbar, navItemContainer, fitSquare, button } = styles

