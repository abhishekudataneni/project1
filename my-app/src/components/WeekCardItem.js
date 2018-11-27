import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import {
    withRouter
  } from 'react-router-dom';
import {connect} from 'react-redux';

const WeekCardItem = (props) => {
   let jobs = props.Job;

   let handleClick= (e) => {
        e.preventDefault();
        console.log(e)
        // setTimeout(() => {
        //     console.log("settimeout")
        //     props.history.push('/calender')
        // },5000)
    console.log(props.currentUser)
   }
  
   let assignments = jobs.map(val =>(
    <Col sm="12" key={val.id} onClick={handleClick}>
        <Card body >
            <div className="card-body cb1">
                    <div className="panel-heading1">
                        <span className="headerLeft">
                            Today | Mon 15
                        </span>
                        <span className="headerRight">12 Nov - 23 Nov</span>
                    </div>
                <div className="Content">
                    <p><b>Client:</b> Trilleum Staffing</p>
                    <p><b>Job:</b> Mcarthur school construction</p>
                    <p className="address"><i class="fa fa-map-marker" style={{fontSize:24}}></i>:#72 Mcarthur road Cincinattin,OH 34576</p>
                </div>
            </div>
            {/* <CardTitle>{val.client}</CardTitle>
            <CardTitle>Job: McArthur School construction</CardTitle>
            <p><i className="fa fa-map-marker">:#72 Mcarthur road Cincinatti,OH 34576</i></p> */}
        </Card>
    </Col>   
   ))
    return(
        <div className="Week">
            <div id="week"></div>
                <div> 
                    <Row>
                        {assignments}
                    </Row>
                </div>
        </div>
    )
}
    

const mapStatetoProps = (state) => {
    return {
    currentUser : state.currentUser
            }
    }
 export default withRouter(connect(mapStatetoProps,null)(WeekCardItem));

