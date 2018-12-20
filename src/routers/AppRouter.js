import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CookBookPage from '../components/CookBookPage';
import AddRecipePage from '../components/AddRecipePage';
import EditRecipePage from '../components/EditRecipePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import ViewRecipePage from '../components/ViewRecipePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/cookbook" component={CookBookPage}/>
        <PrivateRoute path="/create" component={AddRecipePage}/>
        <PrivateRoute path='/edit/:id' component={EditRecipePage}/>
        <PrivateRoute path='/view/:id' component={ViewRecipePage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
