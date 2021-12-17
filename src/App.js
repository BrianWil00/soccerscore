import { Route, Switch } from 'react-router-dom';

import classes from "./App.module.css";

import MyTeams from './pages/MyTeams';
import Stats from './pages/Stats';
import MainPage from './pages/MainPage';
import MainNavigation from './components/layout/MainNavigation';

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
        <Route path='/MyTeams' exact>
          <MyTeams />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
