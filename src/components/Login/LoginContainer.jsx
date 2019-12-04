import React from 'react';
import {connect} from "react-redux";
import {Login} from "./Login";
import {logInThunkCreator, logOutThunkCreator} from "../../Redux/AuthReducer";
import {getAuthUserIsAuthS} from "../../Redux/AuthSelectors";

class LoginContainer extends React.Component {

    onSubmit = formData => {
        this.props.isAuth
            ? this.props.logOutThunkCreator()
            : this.props.logInThunkCreator(formData.Email, formData.Password, formData.Remember, this.props.isAuth);
    };

    render() {
        return <Login onSubmit={this.onSubmit} {...this.props}/>
    }
}

const mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state)});
export default connect(mapStateToProps, {logInThunkCreator, logOutThunkCreator})(LoginContainer);