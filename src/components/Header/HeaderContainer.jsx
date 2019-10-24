import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = state => {
    return {
        isAuth: state.authUserData.isAuth,
        login: state.authUserData.login,
        userPhoto: state.authUserData.userPhoto,
        userId: state.authUserData.userId,
    }
};
export default connect(mapStateToProps, {logOutThunkCreator})(HeaderContainer);