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

      return ( 

        

        <div className={ this.props.auth.uid ? 'chart component' : 'chartOut'}>
          <LineChart 
            data={this.props.weight}
            suffix="kg"
            width="55rem"
            height="30rem" 
            colors={["#F4B400"]}
            curve={false}
            animation={true}
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