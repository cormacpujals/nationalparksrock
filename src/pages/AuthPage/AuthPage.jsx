import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css"

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);
  return (
    <div className="authPage">
      <div>
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
          }
          <button className="toggle" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'ALREADY A USER?' : 'SIGN UP'}</button>
      </div>
    </div>
  );
}