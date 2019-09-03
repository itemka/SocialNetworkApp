import {connect} from "react-redux";
import Posts from "./Posts";

const mapStateToProps = state => {
    return {
        posts: state.pageProfile.posts,
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => {
    return {}
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;

