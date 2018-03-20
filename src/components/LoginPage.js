import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';



export class LoginPage extends React.Component {

  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify</h1>
          <p>Take control of your expenses</p>
          <button className="button" onClick={this.props.login}>Login with Google</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(startLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);
