import React, { Component } from 'react';
import WeekCard from "../components/WeekCard";
import Navbar from "./Navbar";
import Dashboard from '../components/Dashboard';
import {Switch,Route,withRouter,Redirect} from 'react-router';



class Main  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "array": [
                {
                  id:0,
                      assignments: [{
                        id:10,
                        client: "trillium Staffing",
                        Job: "McArthur School construction"
                      },
                      {
                        id:11,
                        client: "trillium ",
                        Job: "McArthur School construction"
                      }]
                },
                {
                  id:1,
                      assignments: [{
                        id:13,
                        client: "trillium Sta",
                        Job: "McArthur School construction"
                      },
                      {
                        id:14,
                        client: "tril Staffing",
                        Job: "McArthur School construction"
                      }]
                },
              ]
          };
    }
    render() {
        return (
            <div>
                <Navbar />
                <Route exact path="/" render={props => (<WeekCard weeks={this.state.array}/>)} /> 
                
            </div>
            
        );
    }
}

export default Main;