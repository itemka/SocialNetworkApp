import React from 'react';
import css from './ProfileDataForm.module.css';
import style from './../ProfileInfo.module.css';
import manWithBeard from './../../../../Files/Images/manBeard.png';
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooc";
import {createField, Input, Textarea} from "../../../Common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../../../utils/validators/validators";
import {reduxForm} from "redux-form";
import style2 from './../Contact/Contact.module.css';
import style3 from './../../../Login/Login.module.css';

const maxLength15 = maxLengthCreator(15);
const ProfileDataForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={style.box}>
            <img className={css.profileImg}
                 src={props.profile.photos.large !== null ? props.profile.photos.large : manWithBeard}/>
            <div className={css.listProfileInfo}>
                <div>
                    <div>
                        <button className={style.setEditModeButton}>Save</button>
                        {props.error && <div className={style3.formError}>{props.error}</div>}
                        {/*<button onClick={`() => setEditMode(!editMode)`} className={style.setEditModeButton}>Back</button>*/}
                    </div>
                    <b>Full name:</b> {createField(Input, [maxLength15], "fullName", "Full name")}
                </div>
                <div>
                    <div><b>My id:</b> {props.profile.userId}</div>
                    <div><b>Looking for a job:</b> {createField(Input, [], `lookingForAJob`, ``, {type: `checkbox`})}
                    </div>
                    <div><b>My professional
                        skills:</b>{createField(Textarea, [], `lookingForAJobDescription`, `My professional skills:`)}
                    </div>
                    <div><b>About me:</b>{createField(Textarea, [], `aboutMe`, `About me:`)}</div>
                </div>
            </div>

            <div>
                <div><ProfileStatusWithHooks {...props}/></div>
                <b>Contacts:</b>
                {Object.keys(props.profile.contacts).map(key => {
                    // return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    return <div key={key} className={style2.contact}>
                        <b>{key}:</b> {createField(Input, [], `contacts.${key}`, key)}</div>
                })}
            </div>
        </form>
    )
};

export const ProfileDataFormReduxForm = reduxForm({form: `editProfile`})(ProfileDataForm);