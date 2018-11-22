import React from 'react';
import {Link} from 'react-router-dom';



const Dashboard = () => (
    <div>
        <div className="container">
            
            <div className="row">

                <div className="col-md-6">
                  {/* <button onClick={() => {
                      history.push("/employeeportal")
                  }}> click here </button> */}
                  <Link to="/employee-portal">employee-portal</Link>
                </div>
                <div className="col-md-6"><Link to="/W2-Form"> W2-Form</Link></div>
                <div className="col-md-6"><Link to="/paystubs"> paystubs</Link></div>
                <div className="col-md-6"><Link to="/Benefits"> Benefits</Link></div>
            
            </div>
        </div>
    </div>

)
export default Dashboard;

