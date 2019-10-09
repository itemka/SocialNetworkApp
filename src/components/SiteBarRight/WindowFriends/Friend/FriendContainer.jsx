import {connect} from "react-redux";
import Friend from "./Friend";

const mapStateToProps = state => ({profiles: state.pageProfile.profiles,});
const FriendContainer = connect(mapStateToProps, {})(Friend);
export default FriendContainer;