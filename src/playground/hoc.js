import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>INFo</h1>
    <p>Additional Info - {props.info}</p>
  </div>
);

const withAdminInfo = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Additional Admin Info</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const authRequired = (WrappedComponent) => {
  return (props) => (
    <div>
    {props.isAuth ? (<div><WrappedComponent {...props}/> - You are Auth </div>): (<p>Auth Required - login to wiew content</p>)}
    
    </div>
  );
}

const AdminInfo = withAdminInfo(Info);
const AuthInfo = authRequired(Info);

ReactDOM.render(<AuthInfo isAuth={false} info='here it comes' />, document.getElementById('app') );