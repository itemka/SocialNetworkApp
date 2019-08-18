import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';

const PublishPost = (props) => {

    let ref = React.createRef();

    return (
        <div className={`${css.PublishPost} clearFix`}>

            <textarea rows={2} className={css.inputPost} placeholder={'your news!'} value={props.newPost}
                      ref={ref}
                      onChange={() => props.onChangePost(ref.current.value)}/>

            <button className={css.buttonSendPost} onClick={() => props.onClickAddPost()}>
                Send post
            </button>

        </div>
    );
};

export default PublishPost;