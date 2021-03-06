import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
   return (
    <header className={classes.header}>
      <div className={classes.logo}>SoccerScore</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/MainPage'>Fixtures/Results</Link>
          </li>
          <li>
            <Link to='/Stats'>Stats</Link>
          </li>
          <li>
            <Link to='/Login'>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;