import React from 'react';
import css from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import PropTypes from 'prop-types';

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

export default Dialogues;