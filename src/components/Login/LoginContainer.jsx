import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {logInThunkCreator, logOutThunkCreator} from "../../Redux/AuthReducer";

class LoginContainer extends React.Component {

    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.authUserData.isAuth,
    }
};

export default connect(mapStateToProps, {logInThunkCreator, logOutThunkCreator})(LoginContainer);