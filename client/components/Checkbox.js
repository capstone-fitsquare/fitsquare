import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Icon } from 'semantic-ui-react'

class Checkbox extends Component {

  constructor() {
    super()
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const toggleSelect = this.state.checked ? 'selected checkbox' : 'checkbox'
    return (
      <div style={container}>
        <div style={point} className={toggleSelect} onClick={this.handleChange}>{this.props.name}</div>
        {this.state.checked &&
          <Icon style={check} name="check" />
        }
      </div>
    )
  }
}

export default Checkbox

const styles = {
  container: {
    display: 'flex',
    padding: '1em',
    margin: '1em',
    alignItems: 'center',
    width: '150px',
  },
  point: {
    cursor: 'pointer'
  },
  check: {
    marginLeft: '.3em',
    marginBottom: '.2em',
    color: 'lightseagreen'
  }
}

const { container, point, check } = styles
