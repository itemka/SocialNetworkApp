import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {checkUserDataThunkCreator} from "../../Redux/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount = () => this.props.checkUserDataThunkCreator(this.props.isAuth);

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = state => {
    return {
        isAuth: state.authUserData.isAuth,
        login: state.authUserData.login,
        userPhoto: state.authUserData.userPhoto
    }
};
export default connect(mapStateToProps, {checkUserDataThunkCreator})(HeaderContainer);