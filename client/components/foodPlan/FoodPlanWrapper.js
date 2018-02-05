import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'
import AllDays from './AllDays'
import RecipesContainer from './recipes/RecipesContainer'

class FoodPlanWrapper extends Component {

  constructor () {
    super()
    this.state = {
      // allergies: true,
      // diets: false,
      // cuisines: false,
      // generatePlan: false,
    }
    // this.togglePreference = this.togglePreference.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  // togglePreference (currentPref, nextPref) {
  //   this.setState({
  //     [currentPref]: false,
  //     [nextPref]: true
  //   })
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.transition('FoodPlanWrapper', 'generateFoodPlan')
  // }

  render() {

    return (
      <div>
        <RecipesContainer />
        <AllDays />
      </div>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(FoodPlanWrapper))

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
