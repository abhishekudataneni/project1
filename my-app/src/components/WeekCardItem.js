import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import {
    withRouter
  } from 'react-router-dom'
const WeekCardItem = (props) => {
   let weekDetails = props.weekDetails.assignments;

   let handleClick= (e) => {
        e.preventDefault();
        console.log(e)
        setTimeout(() => {
            console.log("settimeout")
            props.history.push('/calender')
        },5000)
   }

   let assignments = weekDetails.map(val =>(
    <Col sm="12" key={val.id} onClick={handleClick}>
        <Card body className="AssignmentItem">
            
            <CardTitle>{val.client}</CardTitle>
            <CardTitle>Job: McArthur School construction</CardTitle>
            <p><i className="fa fa-map-marker">:#72 Mcarthur road Cincinatti,OH 34576</i></p>
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
    


 export default withRouter(WeekCardItem);

