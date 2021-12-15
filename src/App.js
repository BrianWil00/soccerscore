import { Route, Switch } from 'react-router-dom';

import MyTeams from './components/pages/MyTeams';
import Stats from './components/pages/Stats';
import MainPage from './components/pages/MainPage';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
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
