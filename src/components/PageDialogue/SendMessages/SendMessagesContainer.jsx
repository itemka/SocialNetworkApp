import {onChangeAddMessageActionCreator, onClickAddMessageActionCreator} from "../../../Redux/DialogueReducer";
import {connect} from "react-redux";
import SendMessages from "./SendMessages";

const mapStateToProps = state => {
    return {
        newMessage: state.pageDialogue.newMessages,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onChangeAddPost: newMessage => dispatch(onChangeAddMessageActionCreator(newMessage)),
        onClickAddMessage: () => dispatch(onClickAddMessageActionCreator()),
    }
};
const SendMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(SendMessages);
export default SendMessagesContainer;