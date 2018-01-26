import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const GroceryListPlanWrapper = (props) => {

  return (
    <div>
      <DayCard />
    </div>
  )
}

const mapState = state => {

}

export default GroceryListPlanWrapper
