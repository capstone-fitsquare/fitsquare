import React, { Component } from 'react';
import IntroSequence from './intro/IntroSequence'
import {Login} from './index'
import Popup from './Popup'
import Typist from 'react-typist'
import Goal from './intro/02_Goal'
import GatherBiometrics from './intro/03_GatherBiometrics'
import ActivityLevel from './intro/04_ActivityLevel'
import AnalyzeBiometrics from './intro/05_AnalyzeBiometrics'
import BiometricsReport from './intro/06_BiometricsReport'
import Diets from './intro/preferences/Diets'
import Allergies from './intro/preferences/Allergies'
import Cuisines from './intro/preferences/Cuisines'
import GenerateFoodPlan from './intro/08_GenerateFoodPlan'
import { withRouter, Link } from 'react-router-dom';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      // for text
      welcomeText: true,
      gatherBiometricsText: false,
      activityLevelText: false,
      analyzeBiometricsText: false,
      biometricsReportText: false,
      dietsText: false,
      allergiesText: false,
      cuisinesText: false,
      generateFoodPlanText: false,
      // for comp
      goal: false,
      gatherBiometrics: false,
      activityLevel: false,
      analyzeBiometrics: false,
      biometricsReport: false,
      diets: false,
      allergies: false,
      cuisines: false,
      generateFoodPlan: false,
    }
    this.transition = this.transition.bind(this)
    this.showComponent = this.showComponent.bind(this)
  }

  transition(nextText, nextComp, currentText, currentComp) {
    this.setState({
      [currentText]: false,
      [currentComp]: false,
      [nextText]: true,
      [nextComp]: true
    })
  }

  showComponent(comp) {
    this.setState({
      [comp]: true,
    })
  }

	render() {

    const welcome = 'Welcome to fitSquare!'
    const currentGoal = 'What is your current fitness goal?'
    const calculating = '...calculating your daily macronutrient needs...'

    console.log('this.state', this.state)
		return (
      <div>
        <div style={container}>
          <div>
            {/* <div style={colorbar}/>
            <h1 style={fitSquare}>fitSquare</h1> */}
            <div style={guyContainer}>
              <img style={guy} src='/images/fitSquare-guy.png' />
              <div className="talk-bubble tri-right border round left-in">
                <div style={message} className="talktext">
                  {this.state.welcomeText ?
                    <Typist
                      avgTypingSpeed={120}
                      startDelay={2000}
                      onTypingDone={() => this.showComponent('goal')}
                    >
                      Welcome to fitSquare!
                      <Typist.Backspace count={welcome.length} delay={1000}/>
                      What is your current fitness goal?
                    </Typist>
                  : null }

                  {this.state.gatherBiometricsText ?
                    // <Typist
                    //   avgTypingSpeed={120}
                    //   startDelay={500}
                    //   onTypingDone={() => this.showComponent('gatherBiometrics')}
                    // >
                      <p>Please enter the information below...</p>
                    // </Typist>
                  : null}

                  {this.state.activityLevelText ?
                    // <Typist
                    //   avgTypingSpeed={120}
                    //   startDelay={500}
                    //   onTypingDone={() => this.showComponent('activityLevel')}
                    // >
                      <p>Please indicate your activity level below.</p>
                    // </Typist>
                  : null}

                  {this.state.analyzeBiometricsText ?
                    <Typist
                      avgTypingSpeed={120}
                      startDelay={500}
                      // onTypingDone={() => this.showComponent('analyzeBiometrics')}
                      onTypingDone={() => console.log('done')}
                    >
                      ...
                      <Typist.Backspace count={3}/>
                      ...
                      <Typist.Backspace count={3}/>
                    </Typist>
                  : null}

                  {this.state.biometricsReportText ?
                    // <Typist
                    //   avgTypingSpeed={120}
                    //   startDelay={500}
                    //   onTypingDone={() => this.showComponent('biometricsReport')}
                    // >
                      <p>Here is your daily macronutrient report</p>
                    // </Typist>
                  : null}

                  {this.state.cuisinesText ?
                    // <Typist
                    //   avgTypingSpeed={120}
                    //   startDelay={500}
                    //   onTypingDone={() => this.showComponent('cuisines')}
                    // >
                      <p>Favorite type of food?</p>
                    // </Typist>
                  : null}

                  {this.state.dietsText ?
                    // <Typist
                    //   avgTypingSpeed={120}
                    //   startDelay={500}
                    //   onTypingDone={() => this.showComponent('diets')}
                    // >
                      <p>Special diet?</p>
                    // </Typist>
                  : null}

                  {this.state.allergiesText ?
                    // <Typist
                    //   avgTypingSpeed={120}
                    //   startDelay={500}
                    //   onTypingDone={() => this.showComponent('allergies')}
                    // >
                      <p>Any allergies?</p>
                    // </Typist>
                  : null}

                  {this.state.generateFoodPlanText ?
                    <Typist
                      avgTypingSpeed={120}
                      startDelay={500}
                      onTypingDone={() => this.props.history.push('/food-plan')}
                    >
                      Get ready to start planning your food!!!!
                    </Typist>
                  : null}

                </div>
              </div>
            </div>
            <div>
              {this.state.goal ?
                <Goal transition={this.transition} />
                : null}
               {this.state.gatherBiometrics ?
                <GatherBiometrics transition={this.transition} />
                : null}
               {this.state.activityLevel ?
                <ActivityLevel transition={this.transition} />
                : null}
                {this.state.analyzeBiometrics ?
                <AnalyzeBiometrics transition={this.transition} />
                : null}
                {this.state.biometricsReport ?
                <BiometricsReport transition={this.transition} />
                : null}
                {this.state.cuisines ?
                <Cuisines transition={this.transition} />
                : null}
                {this.state.diets ?
                <Diets transition={this.transition} />
                : null}
                {this.state.allergies ?
                <Allergies transition={this.transition} />
                : null}

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Home)

const styles = {
  colorbar: {
    position: 'fixed',
    width: '100%',
    height: '12px',
    background: 'linear-gradient(to left, #90EE90 0%, #00ffd2 70%)',
  },
  container: {
    background: '#c4ffc4',
    height: '100vh',
    width: '100vw',
  },
  fitSquare: {
    display: 'flex',
    padding: '1em',
    margin: '0 1em',
    letterSpacing: '4px'
  },
  button: {
    display: 'flex',
    margin: '0 3em',
    padding: '.7em 1.2em',
    // background: '#fdf700',
    borderRadius: '16px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18)'
  },
  guyContainer: {
    padding: '4em',
    position: 'relative',
    top: '10vh',
    left: '23vw'
  },
  guy: {
    height: '200px',
    width: '200px'
  },
  message: {
    fontSize: '24px',
    margin: 0
  }
}
const { colorbar, container, fitSquare, button, guyContainer, guy, message } = styles

