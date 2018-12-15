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
      <div className="info component">
        <p>Please, provide those information about you:</p>
        <form
        onSubmit={this.onSubmit}
        >
          <label>Your Age: </label>
          <input type="age" name="age" value={this.state.age} onChange={this.onChange}/>
          <label>Your Height: </label>
          <input type="number" name="height" value={this.state.height} onChange={this.onChange}/>
          <label>Goal Weight: </label>
          <input type="number" name="goalWeight" value={this.state.goalWeight} onChange={this.onChange}/>
          <label>Gender: </label>
          <select name="gender" value={this.state.gender} onChange={this.onChange}>
            <option>female</option>
            <option>male</option>
          </select>
          {this.props.info.age ? <button>update</button> : <button>submit</button>}

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
      info: state.info
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);