import React, {useState} from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {
    SavePhotoThunk, SaveProfileThunkCreator, UpdateStatusProfilePageThunkCreator
} from "../../../Redux/ProfileReducer";
import {
    getProfileError, getProfileOtherPeopleId, getProfileS, getProfileStatusS
} from "../../../Redux/ProfileSelectors";
import css from "./ProfileInfo.module.css";
import {getAuthUserIsOwner} from "../../../Redux/AuthSelectors";

const ProfileInfoContainer = props => {
    let [editMode, setEditMode] = useState(false);
    const onSubmit = formData => {
        props.SaveProfileThunkCreator(formData).then(() => {
            setEditMode(false)
        });
    };
    let selectedPhoto = event => {
        if (event.target.files.length !== 0) props.SavePhotoThunk(event.target.files[0]);
    };
    return (
        <div className={css.box}>
            <ProfileInfo {...props} selectedPhoto={selectedPhoto} onSubmit={onSubmit}
                         editMode={editMode} setEditMode={setEditMode}/>
            {!editMode ? <button onClick={() => setEditMode(!editMode)}
                                 className={`${css.setEditModeButton}`}>Edit mode</button> : null}
        </div>
    )
};

const mapStateToProps = state => ({
    profile: getProfileS(state), error: getProfileError(state), status: getProfileStatusS(state),
    isOwner: getAuthUserIsOwner(state), otherPeopleId: getProfileOtherPeopleId(state),
});
export default connect(mapStateToProps, {
    UpdateStatusProfilePageThunkCreator, SaveProfileThunkCreator, SavePhotoThunk
})(ProfileInfoContainer);