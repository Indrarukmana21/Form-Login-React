import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      rememberMe: false
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleRememberMeChange = (event) => {
    this.setState({ rememberMe: event.target.checked });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // lakukan sesuatu dengan username dan password
    console.log('Login dengan username: ' + this.state.username + ' dan password: ' + this.state.password);
  }

  handleForgotPassword = () => {
    // tampilkan form untuk mereset password
    console.log('Lupa Password');
  }

  handleRegistration = () => {
    // tampilkan form untuk mendaftar
    console.log('Registrasi Mahasiswa Baru');
  }

  render() {
    const { username, password } = this.state;

    const onChangeUsername = (e) => {
      const value = e.target.value;
      this.setState({ username: value });
    };

    const onChangePassword = (e) => {
      const value = e.target.value;
      this.setState({ password: value });
    };

    return (
        <div className="flex-row align items center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="login-wrapper">
                <form onSubmit={this.handleSubmit} className="login-form">
                  <h1>Login</h1>
                  <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={username} onChange={onChangeUsername} placeholder="Ketikkan username anda" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={onChangePassword} placeholder="Ketikkan password anda" className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary">Login Admin</button>
                    <div className="login-links">
                    <button type="button" className="btn btn-link" onClick={this.handleRegistration}>Register Mahasiswa Baru</button>
                    <button type="button" className="btn btn-link" onClick={this.handleForgotPassword}>Lupa Password?</button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default Login;
