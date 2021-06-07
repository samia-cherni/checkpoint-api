import React from "react";
import UseList from "./components/UseList";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router";


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          exact path="/"
          component={UseList}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
