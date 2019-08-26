import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';
import {
    onChangePostActionCreator,
    onClickAddPostActionCreator
} from "../../../../Redux/PageProfileReducer";

const PublishPost = (props) => {

    let state = {
        newPost: props.newPost,
        typing: props.typing,
    };

    let ref = React.createRef();

    let onChangePost = () => props.dispatch(onChangePostActionCreator(ref.current.value));
    let onClickAddPost = () => props.dispatch(onClickAddPostActionCreator());

    return (
        <div className={`${css.PublishPost} clearFix`}>

            <textarea rows={2}
                      className={css.inputPost}
                      placeholder={'your news!'}
                      value={state.newPost}
                      ref={ref}
                      onChange={() => onChangePost()}/>
            <div>{state.typing}</div>
            <button className={css.buttonSendPost}
                    onClick={() => onClickAddPost()}>
                Send post
            </button>

        </div>
    );
};

export default PublishPost;