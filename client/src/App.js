import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import history from './history';
import store from './store/index';

import css from './App.css';

import Home from './components/Home';
import Header from './components/Header';
import NotFound from './components/NotFound/index';
import CreationPanelContainer from './containers/CreationPanelContainer';
import SearchContainer from './containers/SearchContainer';
import ListFilmsContainer from './containers/ListFilmsContainer';
import FilmContainer from './containers/FilmContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Header/>
            <main className={css.wrapper}>
              <SearchContainer/>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/films' component={ListFilmsContainer}/>
                <Route exact path='/films/:name' component={FilmContainer}/>
                <Route exact path='/creation-panel' component={CreationPanelContainer}/>
                <Route component={NotFound}/>
              </Switch>
            </main>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
