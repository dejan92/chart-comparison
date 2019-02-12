import React from 'react';
import { render } from 'react-dom';
import { Route, NavLink, BrowserRouter as Router, Switch } from "react-router-dom";
import App from './App';
import AreaSplineSmooth from './AreaTest';
import Doughnut from './Doughnut';
import Area from './Area';
import Pie from './Pie';
import SplineChart from './SplineChart';
// import Test from './Test';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact actvieClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink actvieClassName="active" to="/areaSpline">
              Area Spline
            </NavLink>
          </li>
          <li>
            <NavLink actvieClassName="active" to="/doughnut">
              Doughnut
            </NavLink>
          </li>
          <li>
            <NavLink actvieClassName="active" to="/pie">
              Pie
            </NavLink>
          </li>
          <li>
            <NavLink actvieClassName="active" to="/area">
              Area
            </NavLink>
          </li>
          <li>
            <NavLink actvieClassName="active" to="/splineChart">
              SplineChart
            </NavLink>
          </li>
          {/* <li>
            <NavLink actvieClassName="active" to="/test">
              SomeTest
            </NavLink>
          </li> */}
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/areaSpline" component={AreaSplineSmooth} />
          <Route path="/doughnut" component={Doughnut} />
          <Route path="/area" component={Area} />
          <Route path="/pie" component={Pie} />
          <Route path="/splineChart" component={SplineChart} />
          {/* <Route path="/test" component={Test} /> */}
          {/* <Route component={Notfound} /> */}
        </Switch>
      </div>
    </Router>
  );

render(routing, document.getElementById("root"));
