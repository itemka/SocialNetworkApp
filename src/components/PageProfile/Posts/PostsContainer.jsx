import {connect} from "react-redux";
import Posts from "./Posts";
import {getProfilePostsS, getProfileS} from "../../../Redux/ProfileSelectors";

const mapStateToProps = state => {
    return {
        posts: getProfilePostsS(state),
        profile: getProfileS(state),
    }
};

const PostsContainer = connect(mapStateToProps, {})(Posts);
export default PostsContainer;

