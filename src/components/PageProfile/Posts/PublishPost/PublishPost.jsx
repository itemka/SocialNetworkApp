import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';

const PublishPost = (props) => {

    let ref = React.createRef();

    return (
        <div className={`${css.PublishPost} clearFix`}>
            <textarea ref={ref} onChange={()=>props.dataFunctions.onChangeAddPost(ref.current.value)}
                      rows={3} className={css.inputPost}
                      placeholder={'your news!'}/>
            <button className={css.buttonSendPost}
                    onClick={() => props.dataFunctions.onClickButtonAddPost()}>Send post
            </button>

        </div>
    );
};

export default PublishPost;