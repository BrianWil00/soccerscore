import classes from './ResultsList.module.css';
import Results from './Results';

function ResultsList(props) {
  return (
    <ul className={classes.list}>
      {props.results.map(result => (
        <Results
          home={result.home}
          away={result.away}
          score={result.score}
          time={result.time}
        />
      ))}
    </ul>
  );
}

export default ResultsList;