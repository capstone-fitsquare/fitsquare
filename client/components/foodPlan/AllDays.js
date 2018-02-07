import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { DayCard, GroceryList } from './index'
import MacroPieChartContainer from './MacroPieChartContainer';

const AllDays = (props) => {

  return (
    <div>
      <div style={container}>
        <div style={daysContainer}>
        {[...Array(5)].map( (x, i) =>
          <DayCard key={i} dayN={i} />
        )}
        </div>
        <div style={imgContainer}>
          <MacroPieChartContainer />
        </div>
      </div>
      <GroceryList />
    </div>
  )
}

export default AllDays

const styles = {
  container: {
    display: 'flex',
    // flexDirection: 'column',
    margin: '3em'
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  img: {
    width: '200px',
    height: '200px'
  },
  daysContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '3em'
  }
}

const { container, imgContainer, img, daysContainer } = styles
