import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Colleges from "./components/Colleges";
import Contact from "./components/Contact";
import About from "./components/About";
import StudentDetails from "./components/StudentDetails";
import Search from "./components/Search";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/courses/:course" component={Courses} />
        <Route exact path="/colleges/:location" component={Colleges} />
        <Route
          exact
          path="/student details/:collegeId"
          component={StudentDetails}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  );
}

export default App;
