import React from 'react';
import './First.css'

const Home = () => {}
const About = () => {}
const Login = () => {}
const Register = () => {}

const First = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/Daftar">Daftar</a>
          </li>
        </ul>
      </nav>

      <Home />
      <About />
      <Login />
      <Register />
      <div className="home-container">
        <h1>Selamat Datang di Website Kami!</h1>
            <p>Website kami berisi informasi seputar teknologi terbaru, tutorial pengembangan software, dan tips & trik dalam dunia teknologi.</p>
            <button className="btn">Pelajari Lebih Lanjut</button>
      </div>
    </div>
  );
};

export default First;