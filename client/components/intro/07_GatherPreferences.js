import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { fetchYummlySearchMatches, fetchYummlyRecipeDetails } from '../../store'
import { withRouter, Link } from 'react-router-dom'
import { Allergies, Diets, Cuisines } from './preferences'

class GatherPreferences extends Component {

  constructor () {
    super()
    this.state = {
      allergies: true,
      diets: false,
      cuisines: false,
      generatePlan: false,
    }
    this.togglePreference = this.togglePreference.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  togglePreference (currentPref, nextPref) {
    this.setState({
      [currentPref]: false,
      [nextPref]: true
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.transition('gatherPreferences', 'generateFoodPlan')
  }

  render() {

    console.log('this.state', this.state)
    console.log('this.props', this.props)

    return (
      <div style={container}>
        {(this.state.allergies || this.state.diets) &&
          <div style={header}>
            <h3>Do you have any food restrictions?</h3>
          </div>
        }
        {this.state.allergies &&
          <Allergies togglePreference={this.togglePreference} />
        }
        {this.state.diets &&
          <Diets togglePreference={this.togglePreference} />
        }

        {this.state.cuisines &&
          <div>
            <div style={header}>
              <h3>Food preferences?</h3>
            </div>
            <Cuisines togglePreference={this.togglePreference} />
          </div>
        }

        {this.state.generatePlan &&
          <Button onClick={() => this.props.transition('gatherPreferences', 'generateFoodPlan')}>Generate Food Plan</Button>
        }
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
