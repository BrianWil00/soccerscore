import React, { useState } from "react";
import classes from "./Login.module.css";
import Card from '../components/ui/Card'
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [errorMessages, setErrorMessages] = useState({});

  const database = [
    {
      username: "user1",
      password: "pass1"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        history.push("/MyTeams");
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className={classes.control}>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="uname" required />
        {renderErrorMessage("uname")}
        <label>Password </label>
        <input type="password" name="pass" required />
        {renderErrorMessage("pass")}
        <div className={classes.actions}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className={classes.mainDiv}>
      <h1 className={classes.heading}>Login</h1>     
        <Card>
          {renderForm}
          <div className= {classes.content}>
            <div>Don't have an account?</div>
            <div className={classes.actions}>
              <Link to="/SignUp">
                <button>Sign Up</button>
              </Link>
            </div>
          </div>
        </Card>
    </div>
  );
}

export default Login;