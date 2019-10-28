import React from 'react';
import {connect} from "react-redux";
import Login from "./Login";
import {logInThunkCreator, logOutThunkCreator} from "../../Redux/AuthReducer";
import {getAuthUserIsAuthS} from "../../Redux/AuthSelectors";

class LoginContainer extends React.Component {

    render() {
        return <Login {...this.props}/>
    }
}

const mapStateToProps = state => ({isAuth: getAuthUserIsAuthS(state)});
export default connect(mapStateToProps, {logInThunkCreator, logOutThunkCreator})(LoginContainer);