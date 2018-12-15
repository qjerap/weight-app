import React from 'react'
import { connect } from 'react-redux'

 const Stats = (props) => {

   const { goalWeight, height, } = props.info
   const CWeight = Object.values(props.weight).sort().pop()
   const FWeight = Object.values(props.weight).sort().shift()

  return (
    <div className={ props.auth.uid ? 'stats component' : 'statsOut'}>
      <p>Your Weight: {CWeight}</p>
      <p>{`You're ${FWeight - goalWeight} kg away from your goal weight!`}</p>
      <p>BMI: {Math.round(CWeight / Math.pow(height / 100, 2))}</p>
      <p>Total weight lost: {CWeight - FWeight} kg</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    info: state.info,
    weight: state.weight,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Stats);