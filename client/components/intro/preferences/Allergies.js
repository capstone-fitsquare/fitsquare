import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Button, Form, Input, Radio, Select } from 'semantic-ui-react'
import store, { addAllergy, syncLocalStorage, fetchYummlySearchMatches } from '../../../store'
import { withRouter, Link } from 'react-router-dom'
import { Checkbox } from '../../../components'

const allergies =
['Dairy-Free', 'Egg-Free', 'Gluten-Free', 'Peanut-Free', 'Seafood-Free', 'Sesame-Free', 'Soy-Free', 'Sulfite-Free', 'Tree Nut-Free', 'Wheat-Free']

class Allergies extends Component {

  componentDidMount() {
    const example = {
      q: 'onion soup',
      requirePictures: true,
      allowedAllergy: ['Egg-Free', 'Gluten-Free'],
      allowedCourse: ['Main Dishes'],
      allowedCuisine: ['American', 'Chinese'],
      allowedDiet: ['Lacto vegetarian', 'Ovo vegetarian'],
      maxTotalTimeInSeconds: 5400,
      calories: { min: null, max: 1000 }, // nutrition.ENERC_KCAL.max: 1000
      protein: { min: 100, max: null },  // nutrition.PROCNT.min: 100
      carbs: { min: null, max: 10 },  // nutrition.CHOCDF.max: 10
      fat: { min: null, max: 10 }  // nutrition.FAT.max: 10
    }
    // this.props.fetchYummlySearchMatches(example)
    // console.log('attempting to fetch...')
  }

  handleChecked(e, result) {
    console.log('e', event)
    console.log('result', result)
    const { name, checked } = result
    if (checked) {
      this.props.addAllergy(name)
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    syncLocalStorage(store.getState())
  }

  render() {

    return (
      <div style={container}>
       <div style={header}>
          <p>Indicate any food allergies</p>
        </div>
        <div>
          {allergies.map(allergy =>
            <Checkbox key={allergy} name={allergy} />
          )}
        </div>
      </div>
    )
  }
}

const mapState = null
const mapDispatch = dispatch => {
  return bindActionCreators({
    addAllergy, fetchYummlySearchMatches
  }, dispatch)
}

export default connect(mapState, mapDispatch)(Allergies)

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
}

const { container, header } = styles
