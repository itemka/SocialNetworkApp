import React from 'react';
import {connect} from "react-redux";
import WindowFriends from "./WindowFriends";
import {SetUsersSiteBarRightThunkCreator} from "../../../Redux/SiteBarRightReducer";

class WindowsFriendsContainer extends React.Component {
    componentDidMount() {
        this.props.SetUsersSiteBarRightThunkCreator(this.props.countUsers);
    }

    render() {
        return <WindowFriends {...this.props}/>
    }
}

const mapStateToProps = state => ({
    countUsers: state.siteBarRight.countUsers,
    totalUsersCount: state.siteBarRight.totalUsersCount
});
const WindowFriendsContainer = connect(mapStateToProps, {SetUsersSiteBarRightThunkCreator})(WindowsFriendsContainer);
export default WindowFriendsContainer;