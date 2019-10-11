import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import { Login, HomePage, Profile, Community, CreatePage, UserPage } from '.';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Profile} />
        <Route path="/create" component={CreatePage} />
        <Route path="/community/:community" component={Community} />
        <Route path="/user/:username" component={UserPage} />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
