import React from 'react';
import { Component } from 'react/cjs/react.development';
import CustomButton from '../custom-button/customButton.component';
import FormInput from '../form-input/formInput.component';
import  {signInWithGoogle}  from '../../firebase/firebase.utils';
import './signIn.styles.css'

class SignIn extends Component{
    constructor(){
        super()

        this.state = {
            email : "",
            password :""
        }
    }

    handleSubmit = (e) => {
        this.setState({email:'',password:''})
    }

    handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({[name] : value})
    }

    render(){
        const {email, password} = this.state;
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email</span>
                <form action="" onSubmit ={this.handleSubmit}>
                <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange= {this.handleChange}
                        label = "Email"
                        required
                    />
                    

                    <FormInput 
                    type="password" 
                    name="password"
                    value={password} 
                    handleChange={this.handleChange}
                    label="Password"
                    required />
                    <div className='authButtons'>
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton handleClick={signInWithGoogle} isGoogleSignIn>Sign in with Google </CustomButton>
                    </div>
                    

                </form>
            </div>
        )
    }
}

export default SignIn;