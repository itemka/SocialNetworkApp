import {onClickAddMessageActionCreator} from "../../../Redux/DialogueReducer";
import {connect} from "react-redux";
import SendMessages from "./SendMessages";

// const mapStateToProps = state => {
//     return {newMessage: state.pageDialogue.newMessages}
// };
const SendMessagesContainer = connect(null, {onClickAddMessageActionCreator})(SendMessages);
export default SendMessagesContainer;