import React from 'react';
import { connect } from 'react-redux'
import { forgotPassword } from '../../actions/auth';
import Messages from '../Messages';

class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleForgot(event) {
    event.preventDefault();
    this.props.dispatch(forgotPassword(this.state.email));
  }

  render() {
    return (
      <div className="container">
        <card>
          <Messages messages={this.props.messages}/>
          <form onSubmit={this.handleForgot.bind(this)}>
            <h4>Forgot Password</h4>
            <p>Enter your email address below and we'll send you password reset instructions.</p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} autoFocus/>
            <br/>
            <button type="submit">Reset Password</button>
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

export default connect(mapStateToProps)(Forgot);
