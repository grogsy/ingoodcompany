import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import { Login, Landing, UserHome, Community, CreateCommunity } from '..';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={UserHome} />
        <Route path="/create" component={CreateCommunity} />
        <Route path="/community/:community" component={Community} />
        <Route component={Landing} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
