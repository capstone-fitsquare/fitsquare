import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { MacroGoalCountdown, MicroGoalCountdown } from '../../components'
import { postGroceryList } from '../../store'

class GroceryListForm extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Grocery List Name'
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
    const newGroceryList = {...this.state}
    this.props.postGroceryList(newGroceryList)
  }

  render() {
    return (
      <div>

        <div>
          <form>
            <label>Name of Grocery List</label>
            <input name="name" value={this.state.name} onChange={this.handleChange} />

          </form>
        </div>

        <div>
          <MacroGoalCountdown />
          <MicroGoalCountdown />
        </div>

      </div>
    )
  }
}

const mapState = null

const mapDispatch = dispatch => {
  return bindActionCreators({
    postGroceryList
  },
  dispatch)
}

export default connect(mapState, mapDispatch)(GroceryListForm)
