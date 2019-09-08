import {connect} from "react-redux";
import Users from "./Users";
import {setStatus, setUsers} from "../../Redux/PageUsersReducer";

const mapStateToProps = state => {
    return {
        users: state.pageUsers.users,
        status: state.pageUsers.status,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        setUsers: users => dispatch(setUsers(users)),
        setStatus: status => dispatch(setStatus(status)),
    }
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;