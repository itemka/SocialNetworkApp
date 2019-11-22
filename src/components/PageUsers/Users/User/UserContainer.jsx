import React from 'react';
import {connect} from "react-redux";
import {User} from "./User";
import {getUsersCheckFollowS} from "../../../../Redux/UsersSelectors";
import {SetFollowThunkCreator, SetUnFollowThunkCreator} from "../../../../Redux/UsersReducer";

const UsersAPIContainer = (props) => {
    return <User {...props}/>
};

let mapStateToProps = state => ({checkFollow: getUsersCheckFollowS(state)});
export default connect(mapStateToProps, {SetFollowThunkCreator, SetUnFollowThunkCreator})(UsersAPIContainer);