import React, {useState} from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {SaveProfileThunkCreator, UpdateStatusProfilePageThunkCreator} from "../../../Redux/ProfileReducer";
import {getProfileError, getProfileS, getProfileStatusS} from "../../../Redux/ProfileSelectors";
import css from "./ProfileInfo.module.css";

const ProfileInfoContainer = props => {
    let [editMode, setEditMode] = useState(false);
    const onSubmit = formData => {props.SaveProfileThunkCreator(formData).then(() => {setEditMode(false)});};
    return (
        <div className={css.box}>
            <ProfileInfo {...props} onSubmit={onSubmit} editMode={editMode} setEditMode={setEditMode}/>
            {!editMode
                ? <button onClick={() => setEditMode(!editMode)}
                          className={`${css.setEditModeButton}`}>Edit mode</button>
                : null
            }
        </div>
    )
};

const mapStateToProps = state => ({profile: getProfileS(state), error: getProfileError(state), status: getProfileStatusS(state)});
export default connect(mapStateToProps, {UpdateStatusProfilePageThunkCreator, SaveProfileThunkCreator})(ProfileInfoContainer);