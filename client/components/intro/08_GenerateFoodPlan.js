import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import { fetchYummlySearchMatches, fetchYummlyRecipeDetails } from '../../store'

class GenerateFoodPlan extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/food-plan')
    }, 1000);

    const { yummlySearchParams, fetchYummlySearchMatches } = this.props
    console.log('yummlySearchParams', yummlySearchParams)
    fetchYummlySearchMatches(yummlySearchParams, 'breakfast')
    fetchYummlySearchMatches(yummlySearchParams, 'lunch')
    fetchYummlySearchMatches(yummlySearchParams, 'dinner')
    fetchYummlySearchMatches(yummlySearchParams, 'snack')
  }

  render() {
    return (
      <div style={container}>
        <div style={header}>
          <p>...Generating Food Plan...</p>
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    yummlySearchParams: state.yummlySearchParams
  }
}
const mapDispatch = dispatch => {
  return bindActionCreators({
    fetchYummlySearchMatches,
    fetchYummlyRecipeDetails
  }, dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(GenerateFoodPlan))

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    margin: '4em 8em',
    display: 'flex',
    justifyContent: 'center'
  },
}

const { container, header } = styles
