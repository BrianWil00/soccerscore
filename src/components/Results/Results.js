import classes from './Results.module.css';
import Card from '../ui/Card';

function Results(props) {
    return (
      <li className={classes.item}>
        <Card>
          <div className={classes.container}>
            <div className={classes.content}>
              <tr>{props.time}</tr>
              <tr>{props.home} {props.score} {props.away}</tr>
            </div>
          </div>  
        </Card>
      </li>
    );
  }
  
  export default Results;
  