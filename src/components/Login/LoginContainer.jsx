import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {logInThunkCreator} from "../../Redux/AuthReducer";

class LoginContainer extends React.Component {

    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = state => {
    return {
        email: state.authUserData.email,
    }
};

export default connect(mapStateToProps, {logInThunkCreator})(LoginContainer);