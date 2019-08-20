import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';
import {onChangePostActionCreator, onClickAddPostActionCreator} from './../../../../Redux/Store';

const PublishPost = (props) => {

    let ref = React.createRef();

    let onChangePost = () => {
        let action = onChangePostActionCreator(ref.current.value);
        props.dispatch(action);
    };

    let onClickAddPost = () => {
        let action = onClickAddPostActionCreator();
        props.dispatch(action);
    };

    return (
        <div className={`${css.PublishPost} clearFix`}>

            <textarea rows={2}
                      className={css.inputPost}
                      placeholder={'your news!'}
                      value={props.newPost}
                      ref={ref}
                      onChange={() => onChangePost()}/>

            <button className={css.buttonSendPost}
                    onClick={() => onClickAddPost()}>
                Send post
            </button>

        </div>
    );
};

export default PublishPost;