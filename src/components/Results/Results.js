import classes from './Results.module.css';
import Card from '../ui/Card';

function Results(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.container}>
            <div className={classes.content}>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Date</th>
                    <th>Home</th>
                    <th>Score</th>
                    <th>Score</th>
                    <th>Away</th>
                    </tr>
                </thead>
                <tbody id="Results">
                {props.results.map(result => (
                    <tr>
                      <th>{result.when}</th>
                      <th>{result.home}</th>
                      <th>{result.homescore}</th>
                      <th>{result.awayscore}</th>
                      <th>{result.away}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default Results;
  