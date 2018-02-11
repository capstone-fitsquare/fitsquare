import React, { Component } from 'react';
//import {MdPerson} from 'react-icons/lib/md';
import {withRouter,Link} from 'react-router-dom'
import {TiShoppingCart,TiUserOutline} from 'react-icons/lib/ti';
import { Input, Icon, Modal, Header, Dropdown,Label} from 'semantic-ui-react'
import IntroSequence from './intro/IntroSequence'

import {Login} from './index'

class Popup extends Component {
	render() {
		return (
      <div style={popup}>
        <IntroSequence />
      </div>
    )
  }
}


export default Popup

const styles = {
  popup: {

  }
}
const { popup } = styles

