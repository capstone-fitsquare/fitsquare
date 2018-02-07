import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Segment, Form, Message } from 'semantic-ui-react';
import './test.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { phonenumber: '', formSubmitted: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ phonenumber: event.target.value });
  }

  handleSubmit() {
    this.setState({ phonenumber: '', formSubmitted: true });
    return axios
      .post('/api/twilio', {
        phonenumber: this.state.phonenumber,
      })
      .then(resp => resp.data)
      .catch(error => console.log(error));
  }

  render() {
    const { phonenumber, formSubmitted } = this.state;
    console.log('phonenumber', phonenumber);

    let message = null;
    if (formSubmitted) {
      message = <Message success header="Success!" content="Your grocery list has been texted to your phone" />;
    }

    return (
      <Grid columns={1} stackable textAlign="center">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Form success onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Group id="form-group" inline>
                <label>Phone Number</label>
                <Form.Input onChange={this.handleChange} value={phonenumber} placeholder="+12223334444" />
              </Form.Group>
              <Form.Button id="form-group-button" content="Submit" />
              {message}
            </Segment>
          </Form>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    );
  }
}

export default Test;
