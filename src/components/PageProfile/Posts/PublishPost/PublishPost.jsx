import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';
import {
    onChangePostActionCreator,
    onClickAddPostActionCreator
} from "../../../../Redux/PageProfileReducer";
import {connect} from "react-redux";

const PublishPost = (props) => {

    let ref = React.createRef();
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
                      ref={ref}
                      onChange={() => props.onChangePost(ref.current.value)}/>
            <div>{state.typing}</div>
            <button className={css.buttonSendPost}
                    onClick={() => props.onClickAddPost()}>
                Send post
            </button>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        newPost: state.newPost,
        typing: state.typing,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onChangePost: message => dispatch(onChangePostActionCreator(message)),
        onClickAddPost: () => dispatch(onClickAddPostActionCreator()),
    }
};
const ConnectedPublishPost = connect(mapStateToProps, mapDispatchToProps)(PublishPost);

export default ConnectedPublishPost;