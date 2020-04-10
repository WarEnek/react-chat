import React, { Component } from 'react';
import './style.css';

class Login extends Component {
  
  login = (e) => {
    e.preventDefault()
    this.props.setUsername(e.target.username.value)
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.login}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
