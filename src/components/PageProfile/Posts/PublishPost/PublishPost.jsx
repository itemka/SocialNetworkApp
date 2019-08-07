import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';

const PublishPost = () => {
    return (
        <div className={`${css.PublishPost} clearFix`}>
            <input className={css.inputPost} type="text" placeholder={'your news!'}/>
            <button className={css.buttonSendPost}>Send post</button>
        </div>
    );
};

export default PublishPost;