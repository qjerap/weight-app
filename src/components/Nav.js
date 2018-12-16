import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { history } from '../routers/AppRouter'




class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      location: history.location.pathname
    }
  }


  render() {

      const loc = this.state.location
      return (
        <div className={this.props.auth.uid ? 'nav component' : 'navOut'}>

          <Link to='/' className='nav__item'>Chart</Link>
          <Link to='/info' className='nav__item' >Info</Link>

        </div>
    )
  }
 
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Nav)
