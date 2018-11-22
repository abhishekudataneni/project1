import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import EmployeePortal from "../components/EmployeePortal";
import {Route} from 'react-router';
import TimeInputweek from "../components/TimeInputWeek";

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="container App">
      <EmployeePortal />
          {/* <Route exact path="/" component = {EmployeePortal} />
          <Route exact path="/TimeInputweek" component = {TimeInputweek} /> */}
      </div>
    </Router>
  </Provider>
)




export default App;
