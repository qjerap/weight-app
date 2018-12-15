import React from 'react'
import { connect } from 'react-redux'

 const Stats = (props) => {

   const { goalWeight, height, } = props.info
   const CWeight = Object.values(props.weight).sort().pop()
   const FWeight = Object.values(props.weight).sort().shift()
   const bmi = Math.round(CWeight / Math.pow(height / 100, 2))

  return (
    <div className={ props.auth.uid ? 'stats component' : 'statsOut'}>
      <p className="stats__weight">Current Weight</p>
      <p className="stats__neutral">{CWeight}</p>
      <p className="stats__goal">Kg from goal</p>
      <p className="stats__neutral">{FWeight - goalWeight == false ? 'x' : FWeight - goalWeight }</p>
      <p className="stats__loss">Total weight lost</p>
      <p className={CWeight - FWeight > 0 ? 'stats__good' : 'stats__bad'}>{CWeight - FWeight}</p>
      <p className="stats__bmi">Body Mass Index</p>
      <p className={ (bmi > 18.5 && bmi <= 25) ? 'stats__good' : 'stats__bad' }>{bmi}</p>
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