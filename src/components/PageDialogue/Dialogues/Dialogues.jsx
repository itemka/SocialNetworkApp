import React from 'react';
import css from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

const Dialogues = (props) => {
    let profiles = props.profiles.map(item => <Dialogue idProfile={item.id} nameProfile={item.name}
                                                        photoProfile={item.photoProfile}/>);
    return (
        <div className={css.Dialogues}>
            {profiles}
        </div>
    );
};

Dialogues.propTypes = {
    profiles: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        photoProfile: PropTypes.string.isRequired,
    }).isRequired,
};

const mapStateToProps = state => {
    return {
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const ConnectedDialogues = connect(mapStateToProps,mapDispatchToProps)(Dialogues);

export default ConnectedDialogues;