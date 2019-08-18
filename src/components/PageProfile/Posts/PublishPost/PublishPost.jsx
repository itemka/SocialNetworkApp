import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';

const PublishPost = (props) => {

    let ref = React.createRef();

    let onChangePost = () => {
        props.dispatch({
            type: 'CHANGE-POST',
            newPost: ref.current.value,
        });
    };

    let onClickAddPost = () => {
        props.dispatch({
            type: 'ADD-POST',
        })
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