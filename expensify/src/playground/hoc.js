import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info.</h1>
        <p>This is the info: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private info. Please don't Share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? <WrappedComponent {...props}/> : <p>Enter a valid username & password</p>}
        </div>
    );
}

const Auth = requireAuth(Info);
const AdminInfo = withAdminWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='Details Displayed!!'/>, document.getElementById('app'));
ReactDOM.render(<Auth isAuth={true} info='Auth details displayed'/>, document.getElementById('app'))
