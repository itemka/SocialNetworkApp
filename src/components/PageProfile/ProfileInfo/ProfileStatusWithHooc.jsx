import React, {useState} from 'react';
import css from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatusText] = useState(props.status);

    const changeStatus = (e) => setStatusText(e.currentTarget.value);
    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.UpdateStatusProfilePageThunkCreator(statusText);
    };

    return (
        <div className={css.status}>
            Status: {editMode
            ? <input type="text"
                     autoFocus={true}
                     onChange={changeStatus}
                     onBlur={deactivateEditMode}
                     value={statusText}/>
            : <span
                onClick={activateEditMode}>{`${statusText ? statusText : ' _empty_'}`}</span>}
        </div>
    )
};

export default ProfileStatusWithHooks;