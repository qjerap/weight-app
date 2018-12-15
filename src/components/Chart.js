import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter'
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)


class Charts extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }




    render() {

      console.log(this.props.auth)
      return ( 

        

        <div className={ this.props.auth.uid ? 'chart component' : 'chartOut'}>
          <LineChart 
            data={this.props.weight}
            suffix="kg"
            width="1000px"
            height="400px" 
            colors={["#F4B400"]}
            curve={false}
            min={null} 
            max={null}
          />

        </div>
      )  

    }

}

const mapStateToProps = (state) => {
  return {
    weight: state.weight,
    info: state.info.height,
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Charts);