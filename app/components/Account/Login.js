import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { login } from '../../actions/auth';
import { facebookLogin, twitterLogin, googleLogin, vkLogin, githubLogin } from '../../actions/oauth';
import Messages from '../Messages';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', displayEmail: false };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    this.props.dispatch(login(this.state.email, this.state.password));
  }

  handleEmail() {
    event.preventDefault();
    this.setState({
      displayEmail: true
    });
  }

  handleFacebook() {
    this.props.dispatch(facebookLogin())
  }

  handleTwitter() {
    this.props.dispatch(twitterLogin())
  }

  handleGoogle() {
    this.props.dispatch(googleLogin())
  }

  handleVk() {
    this.props.dispatch(vkLogin())
  }

  handleGithub() {
    this.props.dispatch(githubLogin())
  }

  render() {
    return (
      <div className="container login">
        <card>
          <form onSubmit={this.handleLogin.bind(this)}>
            {/* <h4>Log in to Link Keeper</h4>*/}
            {this.state.displayEmail  ? (
              <span>
                <Messages messages={this.props.messages}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} autoFocus/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange.bind(this)}/>
                <p><Link to="/forgot">Forgot your password?</Link></p>
                <button type="submit">Log in</button>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              </span>
            ) : (
              <span>
                <button onClick={this.handleFacebook.bind(this)} className="btn-facebook btn-social"><i className="fa fa-facebook" aria-hidden="true"></i> Continue with Facebook</button>
                <button onClick={this.handleTwitter.bind(this)} className="btn-twitter btn-social"><i className="fa fa-twitter" aria-hidden="true"></i> Continue with Twitter</button>
                <button onClick={this.handleGoogle.bind(this)} className="btn-google btn-social"><i className="fa fa-google" aria-hidden="true"></i> Continue with Google</button>
                <p onClick={this.handleEmail.bind(this)} className='btn-email'>Sign in with Email</p>
              </span>
            )}
          </form>
        </card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Login);
