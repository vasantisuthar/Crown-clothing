import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from '../../components/signIn/signIn.component';

import './sign-in.styles.css'

const SignInAndSignUp = () => {
    return ( 
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
     );
}
 
export default SignInAndSignUp;