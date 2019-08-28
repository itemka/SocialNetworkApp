import React from 'react';
import '../../../../App.css';
import css from './Post.module.css';
import {connect} from "react-redux";

const Post = (props) => {
    return (
        <div className={`${css.Post} clearFix`}>

            <div>
                <img src={props.photoProfile} alt=""/>
            </div>

            <div className={css.dataPost}>
                <div>{`(idPost=${props.id}) ${props.text}`}</div>
            </div>

            <br/>

            <div className={css.likePost}>{`Like: ${props.like}`}</div>
        </div>
    );
};

// const mapStateToProps = state => {
//
//     return {
//         photoProfile: state.pageProfile.profiles[0].photoProfile,
//         text: state.pageProfile.posts.text,
//
//         id: state.pageProfile.posts.id,
//         like: state.pageProfile.posts.like,
//     }
// };
// const mapDispatchToProps = state => {
//     return {
//
//     }
// };
//
// const ConnectedPost = connect(mapStateToProps, mapDispatchToProps)(Post);

export default Post;