import {connect} from "react-redux";
import Messages from "./Messages";

const mapStateToProps = state => {
    return {
        messages: state.pageDialogue.messages,
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages);

export default MessagesContainer;