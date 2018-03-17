import React from 'react';
import { connect } from 'react-redux';
import startLogin from '../actions/auth';



export class LoginPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={this.props.login}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);
