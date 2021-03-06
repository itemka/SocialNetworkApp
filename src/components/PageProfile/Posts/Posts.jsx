import React from 'react';
import css from './Posts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import PublishPostContainer from "./PublishPost/PublishPostContainer";
import manWithBeard from "../../../Files/Images/manBeard.jpg";

//React.memo: if props or this.state not changing -> not render again
const Posts = React.memo(props => {
    // let reversePosts = props.posts.reverse();
    let post = props.posts.map(item => <Post key={item.id}
                                             id={item.id} text={item.text} like={item.like}
                                             photoProfile={manWithBeard}/>);
    return (
        <div className={css.Posts}>

            <PublishPostContainer/>

            <div className={css.listPosts}>
                <div className={css.nameListPosts}>My posts</div>
                <div>
                    {post}
                </div>
            </div>

        </div>
    );
});

Posts.protoTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            like: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    profiles: PropTypes.arrayOf({
        photoProfile: PropTypes.string.isRequired,
    }).isRequired,
};

export default Posts;