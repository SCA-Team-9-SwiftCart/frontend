const SignupPage = () => {
    return ( 
        <div className="signup">
            <div className="signup-container">
                <h1>SIGN UP</h1>
                {/* x */}
                <div className="signup-fields">
                    <input type="email" placeholder="Email Address *" />
                    <input type="password" placeholder="Password *" />
                </div>
                <button>Sign Up</button>
                {/* <p>Or</p> */}
                <button>Continue with Google</button>
                <p className="login-signup">Already have an account? <span>Sign up</span></p>
                
            </div>
        </div>
     );
}
 
export default SignupPage;