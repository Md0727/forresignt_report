import React from 'react';

const LoginContent = () => {
    return (
        <>
            <div className="login-form sdfmsdok">
                <div id="login-box">
                    <div className="left">
                        <h1>Log In</h1>
                        <input type="text" name="email" placeholder="E-mail" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="password" name="password2" placeholder="Retype password" />
                        <input type="submit" name="signup_submit" defaultValue="Log In" />
                    </div>
                    <div className="right">
                        <button className="social-signin facebook">Log in with facebook</button>
                        <button className="social-signin google">Log in with Google+</button>
                    </div>
                    <div className="or loginsdfdsf">OR</div>
                </div>
            </div>


        </>


    );
}

export default LoginContent;

