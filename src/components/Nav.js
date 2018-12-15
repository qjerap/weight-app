import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
  return (
    <div className={props.auth.uid ? 'nav' : 'navOut'}>
    <Link to='/'>Chart</Link>
    <Link to='/info'>Info</Link>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav)
