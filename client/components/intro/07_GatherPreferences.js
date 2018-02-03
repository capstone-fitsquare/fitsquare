import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { fetchYummlySearchMatches, fetchYummlyRecipeDetails } from '../../store'
import { withRouter, Link } from 'react-router-dom'
import { Allergies } from './preferences'

class GatherPreferences extends Component {

  constructor () {
    super()
    this.state = {
      allergies: false,
    }
    this.togglePreference = this.togglePreference.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  togglePreference (preference) {
    this.setState({
      [preference]: !this.state[preference]
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    transition('gatherPreferences', 'generateFoodPlan')
  }

  render() {

    console.log('this.state', this.state)

    return (
      <div style={container}>
        <div style={header}>
          <p>...Gathering Preferences...</p>
        </div>
        <Allergies />
      </div>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({
    fetchYummlySearchMatches, fetchYummlyRecipeDetails
  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(GatherPreferences))

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    margin: '2em 8em 0em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
  preferencesParent: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em',
    margin: '1em',
    alignItems: 'center'
  },
}

const { container, header, preferencesParent } = styles
