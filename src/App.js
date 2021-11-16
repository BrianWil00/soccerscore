import { Route, Switch } from 'react-router-dom';

import MyTeams from '../components/pages/MyTeams';
import Stats from '../components/pages/Stats';
import Layout from './components/layout/Layout';
import MainPage from './components/pages/MainPage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/Stats'>
          <Stats />
        </Route>
        <Route path='/MyTeams'>
          <MyTeams />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
