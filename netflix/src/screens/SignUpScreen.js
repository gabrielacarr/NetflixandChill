import React from "react";
import "./SignUpScreen.css";

function SignUpScreen() {
  const register = (e) => {
    e.preventDefault();
  };

  const signIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="signUpScreenGray">New to Netflix? </span>
          <span className="signUpScreenLink" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
