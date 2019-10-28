import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logOutThunkCreator} from "../../Redux/AuthReducer";
import {getAuthUserIdS, getAuthUserIsAuthS, getAuthUserLoginS, getAuthUserUserPhotoS} from "../../Redux/AuthSelectors";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = state => ({
    isAuth: getAuthUserIsAuthS(state),
    login: getAuthUserLoginS(state),
    userId: getAuthUserIdS(state),
    userPhoto: getAuthUserUserPhotoS(state),
});
export default connect(mapStateToProps, {logOutThunkCreator})(HeaderContainer);