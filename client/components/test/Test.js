import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Segment, Form } from 'semantic-ui-react';
import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import './test.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { phone: '', formSubmitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.isValid = this.isValid.bind(this);
  }

  handleChange(event) {
    this.setState({ phone: event.target.value });
  }

  handleSubmit() {
    this.setState({ phone: '', formSubmitted: true });
    return axios
      .post('/api/twilio', {
        phonenumber: this.state.phone,
      })
      .then(resp => resp.data)
      .catch(error => console.log(error));
  }

  // isValid() {}

  render() {
    const { phone } = this.state;

    return (
      <Grid columns={1} stackable textAlign="center">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Form success onSubmit={this.handleSubmit}>
            <Segment stacked>
              <label>Phone Number</label>
              <Phone placeholder="Enter +12223334444" value={phone} onChange={phone => this.setState({ phone })} />
              {/* <Form.Group id="form-group" inline>
                <Form.Input onChange={this.handleChange} value={phonenumber} placeholder="+12223334444" />
              </Form.Group>*/}
              <Form.Button id="form-group-button" content="Submit" />
              {/*              {message}
*/}{' '}
            </Segment>
          </Form>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    );
  }
}

export default Test;
