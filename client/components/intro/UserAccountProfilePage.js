import React, { Component } from 'react';
import { Grid, Segment, Header, Image, Card, Icon, Button, Divider, Radio, Form } from 'semantic-ui-react';

import './UserAccountProfilePage.css';

export default function UserAccountProfilePage() {
  return (
    <Grid columns={2} stackable>
      <Grid.Column width={1} />
      <Grid.Column width={7}>
        <Segment>
          <Header as="h1">Profile</Header>
          <Image className="centered" src="/images/daniel.jpg" size="medium" circular />
          <Card fluid>
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Meta>Joined in 2016</Card.Meta>
              <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                10 Friends
              </a>
            </Card.Content>
          </Card>
        </Segment>
      </Grid.Column>
      <Grid.Column width={7}>
        <Segment className="fill-content">
          <Header as="h2">Settings</Header>
          <Button positive fluid>
            Sync Google Calendar
          </Button>
          <Divider />
          <Header as="h4">Text notifications</Header>

          <Radio toggle />
          <Divider />
          <Header as="h4">Customize text notifications</Header>
          <RadioExampleRadioGroup />
        </Segment>
      </Grid.Column>
      <Grid.Column width={1} />
    </Grid>
  );
}

class RadioExampleRadioGroup extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });

  render() {
    return (
      <Form>
        <Form.Field>
          <b>{this.state.value}</b>
        </Form.Field>
        <br />
        <Form.Field>
          <Radio
            label="one"
            name="radioGroup"
            value="one"
            checked={this.state.value === 'one'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <Radio
            label="two"
            name="radioGroup"
            value="two"
            checked={this.state.value === 'two'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <Radio
            label="three"
            name="radioGroup"
            value="three"
            checked={this.state.value === 'three'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <br />
        <Form.Field>
          <Radio
            label="four"
            name="radioGroup"
            value="four"
            checked={this.state.value === 'four'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    );
  }
}
