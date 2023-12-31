import React from 'react';

const SignUpContent = () => {
    return (
        <section className="login-form-outer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-7">
                        <div className="login-form">
                            <div id="login-box">
                                <div className="left">
                                    <h1>Sign up</h1>
                                    <input type="text" name="username" placeholder="Username" />
                                    <input type="text" name="email" placeholder="E-mail" />
                                    <input type="password" name="password" placeholder="Password" />
                                    <input type="password" name="password2" placeholder="Retype password" />
                                    <input type="submit" name="signup_submit" defaultValue="Sign me up" />
                                </div>
                                <div className="right">
                                    <button className="social-signin facebook">Log in with facebook</button>
                                    <button className="social-signin twitter">Log in with Twitter</button>
                                    <button className="social-signin google">Log in with Google+</button>
                                </div>
                                <div className="or loginor">OR</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default SignUpContent;

