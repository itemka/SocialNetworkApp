import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = state => {
    return {
        posts: state.pageProfile.posts,
        profile: state.pageProfile.profile,
    }
};

const PostsContainer = connect(mapStateToProps, {})(Posts);
export default PostsContainer;

