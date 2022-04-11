import { Route, Switch } from 'react-router-dom';

import classes from "./App.module.css";

import SignUp from './pages/SignUp';
import Stats from './pages/Stats';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import MainNavigation from './components/layout/MainNavigation';
import MyTeams from './pages/MyTeams';

function App() {
  return (
    <div className={classes.mainDiv}>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/Stats' exact>
          <Stats />
        </Route>
        <Route path='/Login' exact>
          <Login />
        </Route>
        <Route path='/SignUp' exact>
          <SignUp />
        </Route>
        <Route path='/MyTeams' exact>
          <MyTeams />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
