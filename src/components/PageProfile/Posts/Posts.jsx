import React from 'react';
import css from './Posts.module.css';
import PublishPost from "./PublishPost/PublishPost";
import Post from "./Post/Post";
import PropTypes from 'prop-types';

const Posts = (props) => {
    // let reversePosts = props.posts.reverse();
    let post = props.posts.map(item => <Post id={item.id} text={item.text} like={item.like}
                                             photoProfile={props.profiles[0].photoProfile}
    />);
    return (
        <div className={css.Posts}>

            <PublishPost newPost={props.newPost} dataFunctions={props.dataFunctions}/>

            <div className={css.listPosts}>
                <div className={css.nameListPosts}>My posts</div>
                <div>
                    {post}
                </div>
            </div>

        </div>
    );
};

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