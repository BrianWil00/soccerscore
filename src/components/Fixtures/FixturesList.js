import classes from './FixturesList.module.css';
import Fixtures from './Fixtures';

function FixturesList(props) {
  return (
    <ul className={classes.list}>
      {props.fixtures.map(fixtures => (
        <Fixtures
          home={fixtures.home}
          away={fixtures.away}
          when={fixtures.when}
          time={fixtures.time}
        />
      ))}
    </ul>
  );
}

export default FixturesList;