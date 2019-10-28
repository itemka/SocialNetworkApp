import {connect} from "react-redux";
import Messages from "./Messages";
import {getProfilesS} from "../../../Redux/ProfileSelectors";
import {getDialogueMessages} from "../../../Redux/DialogueSelectors";

const mapStateToProps = state => ({messages: getDialogueMessages(state), profiles: getProfilesS(state)});
const MessagesContainer = connect(mapStateToProps, {})(Messages);

export default MessagesContainer;