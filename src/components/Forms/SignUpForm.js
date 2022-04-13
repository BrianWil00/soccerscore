import classes from './SignUpForm.module.css'
import Card from '../ui/Card'

import { useRef } from 'react'

function SignUpForm(props) {
    const usernameInputRef = useRef();
    const passwordInputRef = useRef();
    const teamInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredUsername = usernameInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredTeam = teamInputRef.current.value;

        const SignUpData = {
            username: enteredUsername,
            password: enteredPassword,
            team: enteredTeam
        }

        props.onSignUp(SignUpData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='name'>Username</label>
                    <input type="text" required id="username" ref={usernameInputRef}/>
                    <p><label htmlFor='password'>Password</label></p>
                    <input type="text" required id="password" ref={passwordInputRef}/>
                    <p><label htmlFor='team'>Team</label></p>
                    <select name="selectList" required id="team" ref={teamInputRef}>
                    <option value="Arsenal">Arsenal</option>
                    <option value="Aston Villa">Aston Villa</option>
                    <option value="Brentford">Brentford</option>
                    <option value="Brighton and Hove Albion">Brighton and Hove Albion</option>
                    <option value="Burnley">Burnley</option>
                    <option value="Chelsea">Chelsea</option>
                    <option value="Crystal Palace">Crystal Palace</option>
                    <option value="Everton">Everton</option>
                    <option value="Leeds United">Leeds United</option>
                    <option value="Leicester City">Leicester City</option>
                    <option value="Liverpool">Liverpool</option>
                    <option value="Manchester City">Manchester City</option>
                    <option value="Manchester United">Manchester United</option>
                    <option value="Newcastle United">Newcastle United</option>
                    <option value="Norwich City">Norwich City</option>
                    <option value="Southampton">Southampton</option>
                    <option value="Tottenham Hotspur">Tottenham Hotspur</option>
                    <option value="Watford">Watford</option>
                    <option value="West Ham United">West Ham United</option>
                    <option value="Wolverhampton Wanderers">Wolverhampton Wanderers</option>
                    </select>
                </div>
                <div className={classes.actions}>
                    <button>Sign Up</button>
                </div>
            </form>
        </Card>
    )
}

export default SignUpForm;