import React,{Component} from 'react';
import WeekCardItem from "./WeekCardItem";
import {connect} from 'react-redux';

class WeekCard extends Component {
  
    constructor(props) {
        super(props);
        this.state = {  };
    }
    CurrentWeek = this.props.currentUser.Name;
        // this.props.currentUser.weeks.map((week) => 
        //     <div>week 1</div>)
            // <WeekCardItem key={week.id} Job={week.Job}/> )
        
        // PreviousWeeks = this.props.weeks.filter(val => val.id !== 0).map(val => {
        //    let weekClass = val.id === 0 ? "current-week" : "previous-week";
        //   return  <WeekCardItem key={val.id} weekClass={weekClass} weekDetails={val} />
        // })
    render() {
        
        return (
            <div>
                current
                {this.props.currentUser.id}
            </div> 
        );
    }
}

const mapStatetoProps = (state) => {
    console.log(state);
    return {
    currentUser : state.currentUser,
            }
    }
 export default connect(mapStatetoProps)(WeekCard);
