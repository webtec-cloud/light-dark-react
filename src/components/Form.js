import React from "react";

const Form = () => {
  return (
    <div className="main">
      <p className="sign" align="center">
        sign in
      </p>
      <form className="form1">
        <input placeholder="username" type="text" className="username" />
        <input placeholder="password" type="password" className="password" />
        <a className="submit" align="center">
          sign in
        </a>
        <p className="forgot" align="center">
          <a href="#">Forgot Password? </a>
        </p>
      </form>
    </div>
  );
};

export default Form;
