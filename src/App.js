import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { Header } from "./components";
import { fetchFavoris } from "./store/actions";

const LazyFilms = lazy(() =>
  import("./features/films")
);
const LazyFavoris = lazy(() =>
  import("./features/favoris")
);
class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Suspense fallback={<h1> Loading ...</h1>}>
          <Switch>
            <Route path="/films" component={LazyFilms} />
            <Route path="/favoris" component={LazyFavoris} />
            <Redirect to="/films" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(connect(null, { fetchFavoris })(App));
