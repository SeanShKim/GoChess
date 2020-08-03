import React from "react";
import ReactDOM from "react-dom";
import StartPage from "./Components/StartPage";
import GamePage from "./Components/GamePage";
import ResultPage from "./Components/ResultPage";
import ErrorPage from "./Components/ErrorPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={StartPage} />
        <Route path="/play" exact component={GamePage} />
        <Route path="/result" exact component={ResultPage} />
        <Route path="/" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
