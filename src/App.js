import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import classes from "./App.module.css";
import SignUp from './pages/SignUp';
import Stats from './pages/Stats';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import MainNavigation from './components/layout/MainNavigation';
import MyTeams from './pages/MyTeams';
import { UserContext } from './contexts/UserContext';
import { LoginContext } from './contexts/LoginContext';

function App() {
  const [ UserData , setUserData ] = useState();
  const [ LoginData , setLoginData ] = useState();

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
        <UserContext.Provider value={{ UserData, setUserData}}>
        <LoginContext.Provider value={{ LoginData, setLoginData}}>
        <Route path='/Login' exact>
          <Login />
        </Route>
        <Route path='/SignUp' exact>
          <SignUp />
        </Route>
        <Route path='/MyTeams' exact>
            <MyTeams />
        </Route>
        </LoginContext.Provider>
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
