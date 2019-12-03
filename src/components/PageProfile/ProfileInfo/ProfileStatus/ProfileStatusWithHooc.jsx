import React, {useState, useEffect} from 'react';
import css from './ProfileStatusWithHooc.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatusText] = useState(props.status);

    useEffect(() => {
        setStatusText(props.status)
    }, [props.status]);//зависит от props.status  и если изменится, то вызовится useEffect повторно

    const changeStatus = (e) => setStatusText(e.currentTarget.value);
    const activateEditMode = () => setEditMode(true);
    const deactivateEditMode = () => {
        setEditMode(false);
        props.UpdateStatusProfilePageThunkCreator(statusText);
    };

    return (
        <span className={css.status}>
            <b>Status:</b> {editMode
            ? <input type="text"
                     autoFocus={true}
                     onChange={changeStatus}
                     onBlur={deactivateEditMode}
                     value={statusText}/>
            : <span
                onClick={activateEditMode}>{`${statusText ? statusText : ' _empty_'}`}</span>}
        </span>
    )
};

export default ProfileStatusWithHooks;