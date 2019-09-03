import {
    onChangePostActionCreator,
    onClickAddPostActionCreator
} from "../../../../Redux/PageProfileReducer";
import {connect} from "react-redux";
import PublishPost from "./PublishPost";

const mapStateToProps = state => {
    return {
        newPost: state.pageProfile.newPost,
        typing: state.pageProfile.typing,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onChangePost: message => dispatch(onChangePostActionCreator(message)),
        onClickAddPost: () => dispatch(onClickAddPostActionCreator()),
    }
};
const PublishPostContainer = connect(mapStateToProps, mapDispatchToProps)(PublishPost);

export default PublishPostContainer;