import {Motion, spring} from 'react-motion';
// In your render...

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

const Animations = (props) => {

  return (
    <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {value => <div>{value.x}</div>}
    </Motion>
  )
}

export default Animations

