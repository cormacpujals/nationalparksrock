import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {name, email, password} = this.state;
      const formData = {name, email, password};
      // The promise returned by the signUp service
      // method will resolve to the user object included
      // in the payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      // Probably due to a duplicate email
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div className="signUpDiv">
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="topRowForm">
              <input type="text" name="name" placeholder="NAME" value={this.state.name} onChange={this.handleChange} required />
              <input type="email" name="email" placeholder="EMAIL" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className="bottomRowForm">
              <input type="password" name="password" placeholder="PASSWORD" value={this.state.password} onChange={this.handleChange} required />
              <input type="password" name="confirm" placeholder="CONFIRM" value={this.state.confirm} onChange={this.handleChange} required />
            </div>  
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}