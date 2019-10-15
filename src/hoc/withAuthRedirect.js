import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        isAuth: state.authUserData.isAuth
    }
};

export const withAuthRedirectComponentHOC = Component => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth === false) return <Redirect to={`/login`}/>;
            else return <Component {...this.props}/>
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToProps, null)(RedirectComponent);
    return ConnectedRedirectComponent;
};