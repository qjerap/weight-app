import React from 'react'
import { AddWeightDB } from '../store/actions/weight' 
import { history } from '../routers/AppRouter';
import { connect } from 'react-redux'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'


class Add extends React.Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.state = {
            weight: 0,
            createdAt: moment(),
            calendarFocused: false
        }
    }
    // "2017-01-01 00:00:00 UTC"
    
    onChange(e) {
        this.setState({
            weight: e.target.value
        });    
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.AddWeightDB({ 
            weight: parseInt(this.state.weight),
            time: this.state.createdAt.format("YYYY-MM-DD")
        })
        history.push('/')
    }
    onDateChange(createdAt) {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange({ focused }){ this.setState(()=>({calendarFocused: focused}))}

  render() {
    
    return (
        <div className={ this.props.auth.uid ? 'add component' : 'addOut'}>
        <form
        onSubmit={this.onSubmit}
        >
        <SingleDatePicker
        date={this.state.createdAt}
        onDateChange={this.onDateChange}
        focused={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1}
        isOutsideRange={(day)=>{ return !isInclusivelyBeforeDay(day, moment())}}
        />
            <input 
                onChange={this.onChange}
                name="weight"
                type='text' 
                value={this.state.weight} 
                placeholder='your current weight'
            />
            <button>submit</button>
        </form>
        </div>
    )      
  }
}




const mapDispatchToProps = (dispatch) => ({
    // addDailyWeight: (updates) => dispatch(addDailyWeight(updates))
    AddWeightDB: (updates) => dispatch(AddWeightDB(updates))
})

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Add);