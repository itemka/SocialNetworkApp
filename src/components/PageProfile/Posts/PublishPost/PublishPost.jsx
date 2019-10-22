import React from 'react';
import '../../../../App.css';
import css from './PublishPost.module.css';
import {Field, reduxForm} from "redux-form";

const PublishPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={`${css.PublishPost} clearFix`}>
            <Field component={"textarea"}
                   rows={2}
                   name={"textareaText"}
                   className={css.inputPost}
                   placeholder={'your news!'}
                // value={state.newPost}
                // onChange={event => props.onChangePost(event.currentTarget.value)}
            />
            <div>{props.typing}</div>
            <button className={css.buttonSendPost}>Send post</button>

        </form>
    )
};

const ReducerPublishPostForm = reduxForm({form: `PostForm`})(PublishPostForm);


const PublishPost = (props) => {

    const onSubmit = (formData) => {
        console.log(formData.textareaText);
        props.onClickAddPost(formData.textareaText);
    };
    // let state = {
    //     newPost: props.newPost,
    //     typing: props.typing,
    // };

    return <ReducerPublishPostForm onSubmit={onSubmit} {...props}/>
};

export default PublishPost;