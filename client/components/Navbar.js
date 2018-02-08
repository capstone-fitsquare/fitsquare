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
		const {cart, history, user, loggedIn,logout} = this.props
		return (
			<div style={container}>
        <div style={colorbar}/>
        <div style={{display: 'flex'}}>
          <h1 style={{letterSpacing: '4px', padding: '1em 1em .7em 7vw'}}>     fitSquare</h1>
        </div>
				{/* <Link to="/">
					fitSquare
				</Link>
				{loggedIn ? (
					<div style={{marginRight: "30px"}}>
						<Dropdown className="profileDropdown left" floating trigger={trigger}>
							<Dropdown.Menu>
								<Dropdown.Item onClick={()=>logout()}>
									<Icon name='log out' className='left floated' />
        					Logout
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				)
				: <p style={styles.loginText} onClick={()=>{this.setState({modalOpen: true})}}>Login / Sign Up</p>}
				<Modal size="small" open={this.state.modalOpen} onClose={()=>this.setState({modalOpen: false})}>
			    <Modal.Header>Log In</Modal.Header>
			    <Modal.Content>
			      <Modal.Description>
							<Login closeModal={()=>this.setState({modalOpen: false})} />
			      </Modal.Description>
			    </Modal.Content>
			  </Modal> */}
			</div>
		);
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

}
const { colorbar, container } = styles

