import React,{Component} from 'react';
import axios from "axios";
import { Card, CardTitle, Row, Col } from 'reactstrap';
import WeekCardItem from "./WeekCardItem";
// axios.get("https://cat-fact.herokuapp.com/facts",{ headers: { 'crossDomain': true, 'Content-Type': 'application/json'}}).then(res => {
//     console.log(res)
// });

class WeekCard extends Component {
  
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
        Week = this.props.weeks.map(val => {
          return  <WeekCardItem key={val.id} weekDetails={val} />
        })
    render() {
        
        return (
            <div>
                {this.Week}
            </div>
           
        );
    }
}


export default WeekCard ;