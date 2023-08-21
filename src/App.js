import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './app.scss';
import { Content, Theme } from '@carbon/react';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </BrowserRouter>
    );
  }
}

export default App;
