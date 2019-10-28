import {onClickAddPostActionCreator} from "../../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import PublishPost from "./PublishPost";
import {getProfileNewPostS, getProfileTypingS} from "../../../../Redux/ProfileSelectors";

const mapStateToProps = state => ({
    newPost: getProfileNewPostS(state),
    typing: getProfileTypingS(state),
});
const mapDispatchToProps = dispatch => {
    return {
        // onChangePost: message => dispatch(onChangePostActionCreator(message)),
        onClickAddPost: (message) => dispatch(onClickAddPostActionCreator(message)),
    }
};
const PublishPostContainer = connect(mapStateToProps, mapDispatchToProps)(PublishPost);

export default PublishPostContainer;