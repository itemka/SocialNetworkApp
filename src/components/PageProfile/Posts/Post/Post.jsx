import React from 'react';
import '../../../../App.css';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={`${css.Post} clearFix`}>

            <div>
                <img src={props.photoProfile} alt=""/>
            </div>

            <div className={css.dataPost}>
                <div>{`${props.text} (idPost=${props.id})`}</div>
            </div>

            <br/>

            <div className={css.likePost}>{`Like: ${props.like}`}</div>
        </div>
    );
};

export default Post;