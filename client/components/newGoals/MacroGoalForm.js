'use strict'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { postMacroGoal } from '../../store'
import { withRouter } from 'react-router-dom'

class MacroGoalForm extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Name',
      calories: 2000,
      protein: 150,
      carbs: 200,
      fat: 80
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const newMacroGoal = {...this.state}
    this.props.postMacroGoal(newMacroGoal)
    this.props.history.push('/new-grocery-list')
  }

  render() {

    return (
      <div>

        <form onSubmit={this.handleSubmit}>

            <label>Name of Goal</label>
            <input name="name" value={this.state.name} onChange={this.handleChange} />

            <label>Calories</label>
            <input name="calories" value={this.state.calories} onChange={this.handleChange} />

            <label>Protein</label>
            <input name="protein" value={this.state.protein} onChange={this.handleChange} />

            <label>Carbs</label>
            <input name="carbs" value={this.state.carbs} onChange={this.handleChange} />

            <label>Fat</label>
            <input name="fat" value={this.state.fat} onChange={this.handleChange} />

            <button type="submit">Submit New Goal</button>

        </form>
      </div>
    )
  }

}

const mapState = null

const mapDispatch = dispatch => {
  return bindActionCreators({
    postMacroGoal
  },
  dispatch)
}

export default withRouter(connect(mapState, mapDispatch)(MacroGoalForm))

const styles = {

}

const {  } = styles
