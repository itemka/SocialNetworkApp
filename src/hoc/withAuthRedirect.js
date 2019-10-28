import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserIsAuthS} from "../Redux/AuthSelectors";

const mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state)});

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