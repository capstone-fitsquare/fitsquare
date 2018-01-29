import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import SearchButton from './SearchButton'
import MacroGoalCountdown from './MacroGoalCountdown';
import MicroGoalCountdown from './MicroGoalCountdown';


class DayCard extends Component {

  render() {
    return (
      <div style={container}>

        <div>

          <div>
            <div>
              <p>Breakfast</p>
            </div>
            <SearchButton handleAddFood={this.props.handleAddFood}/>
          </div>

          <div>
            <div>
              <p>Lunch</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>

          <div>
            <div>
              <p>Dinner</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>

          <div>
            <div>
              <p>Snacks</p>
            </div>
            <div>
              <button>+</button>
            </div>
          </div>

          <div style={goalsContainer}>
            <MacroGoalCountdown />
            <MicroGoalCountdown />
          </div>

        </div>

      </div>
    )
  }

}

export default DayCard

const styles = {
  container: {
    display: 'flex'
  },
  goalsContainer: {
    padding: '1em',
    display: 'flex',
    flexDirection: 'column'
  }
}

const { container, goalsContainer } = styles
