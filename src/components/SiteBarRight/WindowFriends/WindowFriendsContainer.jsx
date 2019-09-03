import {connect} from "react-redux";
import WindowFriends from "./WindowFriends";

const mapStateToProps = state => {
    return {
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => { return {} };

const WindowFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(WindowFriends);

export default WindowFriendsContainer;