import React from 'react';
import '../../../../App.css';
import css from './Post.module.css';

const Post = (props) => {
    // console.log(props.photoProfile);
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

export default Post;