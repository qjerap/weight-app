import React from 'react'
import { connect } from 'react-redux'
import { addInfoDB } from '../store/actions/info'

class Info extends React.Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      age: this.props.info.age ? this.props.info.age : 0,
      height: this.props.info.height ? this.props.info.height : 0,
      goalWeight: this.props.info.goalWeight ? this.props.info.goalWeight : 0,
      gender: this.props.info.gender ? this.props.info.gender : 'male',
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.addInfoDB({
      ...this.state
    })
    

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <div className={this.props.auth.uid ? "info component" : 'infoOut'}>

        <p className="info__text">Please, provide those information about you:</p>
        <form
        className="info__form"
        onSubmit={this.onSubmit}
        >
          <div className="info__input">
            <label>Age:</label>
            <input type="number" name="age" value={this.state.age} onChange={this.onChange}/>
          </div>
          <div className="info__input">
            <label>Height: </label>
            <input type="number" name="height" value={this.state.height} onChange={this.onChange}/>          
          </div>
          <div className="info__input">
            <label>Goal Weight: </label>
            <input type="number" name="goalWeight" value={this.state.goalWeight} onChange={this.onChange}/>
          </div>
          <div className="info__input">
            <label>Gender: </label>
            <select name="gender" value={this.state.gender} onChange={this.onChange}>
              <option>female</option>
              <option>male</option>
            </select>          
          </div>



          {this.props.info.age ? <button className="btn btn--mt">update</button> : <button className="btn btn--mt">submit</button>}

        </form>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addInfoDB: (info) => {dispatch(addInfoDB(info))}
})

const mapStateToProps = (state) => {
  return {
      info: state.info,
      auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);