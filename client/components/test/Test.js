import React, { Component } from 'react';
//import axios from 'axios';
import { Grid, Segment, Form, Input } from 'semantic-ui-react';
import './test.css';

class Test extends Component {
  constructor() {
    super();
    this.state = { phonenumber: '', submittedphonenumber: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, { phonenumber, value }) {
    this.setState({ [phonenumber]: value });
  }

  handleSubmit() {
    const { phonenumber } = this.state;
    console.log(phonenumber);
    this.setState({ submittedphonenumber: phonenumber });
  }

  render() {
    const { phonenumber } = this.state;

    return (
      <Grid columns={1} stackable textAlign="center">
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Form onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Group id="form-group" inline>
                <label>Phone Number</label>
                <Form.Input
                  placeholder="(xxx)"
                  phonenumber="phonenumber"
                  value={phonenumber}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Button id="form-group-button" content="Submit" />
            </Segment>
          </Form>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    );
  }
}

export default Test;
