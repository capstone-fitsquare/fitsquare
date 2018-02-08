import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import IntroSequence from "./intro/IntroSequence"

class Home extends Component {

  render() {

    return (
    <div style={popup}>
      <IntroSequence />
    </div>
    )
  }
}

export default Home

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
    justifyContent: 'space-between'
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
  },
  popup: {
    display: 'flex',
    boxShadow: 'rgba(0, 0, 0, 0.180392) 0px 2px 4px',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    margin: 'auto',
    marginTop: '4em',
  }
}
const { colorbar, navItemContainer, fitSquare, button, popup } = styles

