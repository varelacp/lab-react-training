import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = (password) => {
    return password.length >= 6;
  };

  const getGreeting = (nationality) => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return 'Hello';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    console.log('Signup submitted:', { email, password, nationality });
  };

  return (
    <div className="signup-page">
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={`form-input ${
              email && !isEmailValid(email) ? 'invalid' : ''
            }`}
          />
          {email && isEmailValid(email) && (
            <p className="input-message">You typed a valid email</p>
          )}
          {email && !isEmailValid(email) && (
            <p className="error-message">Please enter a valid email address</p>
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={`form-input ${
              password && !isPasswordStrong(password) ? 'invalid' : ''
            }`}
          />
          {password && isPasswordStrong(password) && (
            <p className="input-message">Your password is strong</p>
          )}
          {password && !isPasswordStrong(password) && (
            <p className="error-message">Your password is too weak</p>
          )}
        </div>

        <div className="form-group">
          <label>Nationality:</label>
          <select value={nationality} onChange={handleNationalityChange}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>

        <p className="greeting">{getGreeting(nationality)}</p>

        <p className="email-message">Your email is: {email}</p>

        {isEmailCorrect && (
          <p className="correct-email-message">The email is correct!</p>
        )}
      </form>
    </div>
  );
};

export default SignupPage;
