import {connect} from "react-redux";
import Friend from "./Friend";
import React from "react";

class FriendContainer extends React.Component {
    render() {
        return <Friend {...this.props}/>
    }
}

const mapStateToProps = state => ({
    users: state.siteBarRight.users
});

export default connect(mapStateToProps, {})(FriendContainer)