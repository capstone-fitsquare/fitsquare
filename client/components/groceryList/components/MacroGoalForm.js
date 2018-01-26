import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class GuestInfoForm extends Component {

  constructor () {
    super()
    this.state = {
      name: 'Cutting',
      calories: 2000,
      protein: 150,
      carbs: 200,
      fat: 80
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event, val) {
    this.setState({
      [val]: event.target.value
    })
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.props.setEmail(this.state.email)
  // }

  render() {
    return (
      <div>
        {/* <p style={please}>Please enter the following information:</p> */}
        <Form style={formContainer}>

          <Form.Field>
            <label>Name of Goal</label>
            <input value={`${this.state.name}`} onChange={() => this.handleChange(event, name)} placeholder='email' />
          </Form.Field>

          <Form.Field>
            <label>Calories</label>
            <input placeholder='Last Name' />
          </Form.Field>

          <Form.Field>
            <label>Protein</label>
            <input value={`${this.state.email}`} onChange={this.handleChange} placeholder='email' />
          </Form.Field>

          <Form.Field>
            <label>Carbs</label>
            <input placeholder='Address' />
          </Form.Field>

          <Form.Field>
            <label>Fat</label>
            <input placeholder='Address' />
          </Form.Field>

        </Form>
      </div>
    )
  }

}

export default GuestInfoForm

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1em'
  },
  please: {
    padding: '1em 1em 0 1em'
  }
}

const { formContainer, please } = styles
