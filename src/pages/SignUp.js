import { useHistory } from 'react-router-dom';
import classes from "./SignUp.module.css";
import Card from "../components/ui/Card";
import SignUpForm from "../components/Forms/SignUpForm";

function SignUp() {
    const history = useHistory();

    const SignUpHandler = signUpData => {
        fetch(
            'https://soccerscore-45c81-default-rtdb.firebaseio.com/signup.json',
            {
                method: 'POST',
                body: JSON.stringify(signUpData),
                headers: {
                'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/Login');
        });
    }

    return (
        <div className={classes.mainDiv}>
            <h1 className={classes.heading}>Sign-Up</h1>
            <Card>
                <div className={classes.content}>
                    <SignUpForm onSignUp={SignUpHandler}/>  
                </div>
            </Card>
        </div>
    );
}

export default SignUp;