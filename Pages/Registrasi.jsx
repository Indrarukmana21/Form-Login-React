import React, { useState } from 'react';
import './Registrasi.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Register dengan nama lengkap: ' + fullName + ', email: ' + email + ', password: ' + password);
  }

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="flex-row align items center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="register-wrapper">
              <form onSubmit={handleSubmit} className="register-form">
                <h1>Registrasi</h1>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your full name" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter your password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;