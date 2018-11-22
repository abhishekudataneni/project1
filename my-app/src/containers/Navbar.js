import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    
    render() {
        return (
            <div>
                <Link to="/"> Home </Link>   
                <Link to="/open"> 24 open </Link> 
                <Link to="/correction"> correction </Link>  
                <Link to="/calender"> calender </Link>                  
            </div>
                  );
    }
}

export default Navbar ;