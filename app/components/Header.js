import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'
import { logout } from '../actions/auth';

class Header extends React.Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.dispatch(logout());
  }

  render() {
    const rightNav = this.props.token ? (
      <ul className="list-inline">
          {/* <li>
            <img className="avatar" src={this.props.user.picture || this.props.user.gravatar}/>
            {' '}{this.props.user.name || this.props.user.email || this.props.user.id}{' '}
          </li>*/}
          <li><Link to="/account">Account</Link></li>
          <li><a href="#" onClick={this.handleLogout.bind(this)}>Logout</a></li>
      </ul>
    ) : (
      <ul className="list-inline">
          <li><Link to="/login">Sign in / Sign up</Link></li>
          {/* <li><Link to="/signup">Sign up</Link></li>*/}
      </ul>
    );
    return (
      <div className="container header">
        <div className="logo-holder">
          {/* <img className='logo' src="https://cdn-images-1.medium.com/max/800/1*BWh2pt4DkcFUMznsWHBn0A.png"/>*/}
          <div className="logo">Link Keeper</div>
        </div>
        <ul className="list-inline">
          {/*<li><IndexLink to="/">Link keeper</IndexLink></li>*/}
          <li><Link to="/links">My Links</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li>*/}
        </ul>
        {rightNav}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Header);
