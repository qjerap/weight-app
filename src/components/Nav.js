import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Nav = (props) => {



  return (
    <div className={props.auth.uid ? 'nav component' : 'navOut'}>

      <Link to='/' className='nav__item'>Chart</Link>
      <Link to='/info' className="nav__item">Info</Link>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav)
