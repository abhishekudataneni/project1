import React, { Component } from 'react';
import DayForm from "./DayForm" 
class TimeInputweek extends Component {
    constructor(props) {
        super(props);
        this.state = { days: [{},{},{}] };
    }
    weekInput = this.state.days.map(day => {
        return <DayForm />
    })
    render() {
        return (
            <div>
                {this.weekInput}
            </div>
            
        );
    }
}

export default TimeInputweek ;