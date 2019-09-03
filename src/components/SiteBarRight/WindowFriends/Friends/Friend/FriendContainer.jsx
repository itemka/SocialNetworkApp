import {connect} from "react-redux";
import Friend from "./Friend";

const mapStateToProps = state => {
    return {
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const FriendContainer = connect(mapStateToProps, mapDispatchToProps)(Friend);

export default FriendContainer;