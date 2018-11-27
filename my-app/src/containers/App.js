import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import EmployeePortal from "../components/EmployeePortal";
import HomeNavbar from "../components/HomeNavbar";
import {Route} from 'react-router';
// import  fetchCurrentUser  from '../store/actions/actionCreator';

const store = configureStore();
// store.dispatch(fetchCurrentUser());
const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <HomeNavbar />
        <EmployeePortal />
          {/* <Route exact path="/" component = {EmployeePortal} />
          <Route exact path="/TimeInputweek" component = {TimeInputweek} /> */}
      </div>
    </Router>
  </Provider>
)




export default App;
