import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';

const PublishPost = (props) => {

    let state = {
        newPost: props.newPost,
        typing: props.typing,
    };

    return (
        <div className={`${css.PublishPost} clearFix`}>

            <textarea rows={2}
                      className={css.inputPost}
                      placeholder={'your news!'}
                      value={state.newPost}
                      onChange={event => props.onChangePost(event.currentTarget.value)}/>
            <div>{state.typing}</div>
            <button className={css.buttonSendPost}
                    onClick={() => props.onClickAddPost()}>
                Send post
            </button>

        </div>
    );
};

export default PublishPost;