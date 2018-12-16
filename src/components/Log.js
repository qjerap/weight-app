import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLogout, logout } from '../store/actions/auth'


 const Log = (props) => {
   
  return (
    <div className='login component'>
      {props.isAuth ? 
        <div className="islog">
          <div className="islog__top">
            <p>weight app</p> 
          </div>
          
          <div className="islog__bot">
            <button className="btn"
            onClick={() => {
              props.logout()
              props.startLogout()
            }}
            >Logout</button>           
          </div>
       
        </div>

        : 
        <div className="islog">
          <div className="islog__top">
            <p>weight app</p>
          </div>
          <div className="islog__bot">
            <button className="btn" onClick={props.startLogin}>login</button>              
          </div>
    
        </div>

      }
      
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => {dispatch(startLogin())},
    startLogout: () => {dispatch(startLogout())},
    logout: () => {dispatch(logout())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Log);