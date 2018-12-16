import React from 'react'
import { connect } from 'react-redux'

 const Stats = (props) => {


   let a = props.weight
   let y = {};
   Object.keys(a).sort().forEach((key)=>{ y[key] = a[key]});
   const last = Object.values(y).pop()
   const first = Object.values(y).shift()
   const { goalWeight, height, } = props.info
   const bmi = Math.round(last / Math.pow(height / 100, 2))

  return (
    <div className={ props.auth.uid ? 'stats component' : 'statsOut'}>
      <p className="stats__weight">Current Weight</p>
      <p className="stats__neutral">{last}</p>
      <p className="stats__goal">Kg from goal</p>
      <p className="stats__neutral">{isNaN(last - goalWeight) ? '' : last - goalWeight}</p>
      <p className="stats__loss">Total weight lost</p>
      <p className={first - last > 0 ? 'stats__good' : 'stats__bad'}>{isNaN(first - last) ? '' : first - last}</p>
      <p className="stats__bmi">Body Mass Index</p>
      <p className={ (bmi > 18.5 && bmi <= 25) ? 'stats__good' : 'stats__bad' }>{isNaN(bmi) ? '' : bmi}</p>
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