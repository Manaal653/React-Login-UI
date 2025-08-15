import React from "react";
import "./LoginPage.css";
import botImage from "./OneScreen.png"; // Transparent PNG robot

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      {/* Background effects */}
      <div className="bg-elements">
        {/* Circle 1 */}
        <div className="circle outer circle1"></div>
        <div className="circle inner circle1"></div>

        {/* Circle 2 */}
        <div className="circle outer circle2"></div>
        <div className="circle inner circle2"></div>

        {/* Circle 3 */}
        <div className="circle outer circle3"></div>
        <div className="circle inner circle3"></div>
      </div>

      {/* Left Section */}
      <div className="left-section">
        <div className="robot-text-container">
          <div className="robot-container">
            <img src={botImage} alt="Bot" className="robot-img" />
            <div className="boost-trail"></div>
          </div>
          <div className="text-area side-text">
            <h1>OneScreen Sage</h1>
            <p>Your All in One <b>OneScreen</b> Guide </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-card">
          <h2>Log in</h2>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            <button type="button" className="primary-btn">Request Access</button>
            <div className="divider">OR</div>
            <button type="button" className="secondary-btn">Use as Guest</button>
          </form>
        </div>
      </div>
    </div>
  );
}