import {connect} from "react-redux";
import WindowFriends from "./WindowFriends";

const mapStateToProps = state => ({profiles: state.pageProfile.profiles});
const WindowFriendsContainer = connect(mapStateToProps, {})(WindowFriends);
export default WindowFriendsContainer;