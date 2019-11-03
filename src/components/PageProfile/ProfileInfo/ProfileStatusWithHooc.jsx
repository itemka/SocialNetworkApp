import React, {useState, useEffect} from 'react';
import css from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [statusText, setStatusText] = useState(props.status);

    useEffect(()=>{
        setStatusText(props.status)
    }, [props.status]);//зависит от props.status  и если изменится, то вызовится useEffect повторно

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