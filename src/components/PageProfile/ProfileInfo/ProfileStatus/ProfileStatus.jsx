import React from 'react';
import css from '../ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({statusText: this.props.status})
        }
    }

    state = {
        isMode: false,
        statusText: this.props.status
    };

    changeStatus = (e) => {
        this.setState({statusText: e.currentTarget.value});
    };

    activateEditMode = () => this.setState({isMode: true});
    deactivateEditMode = () => {
        this.setState({isMode: false});
        this.props.UpdateStatusProfilePageThunkCreator(this.state.statusText);
    };

    render() {
        return (
            <div className={css.status}>Status: {this.state.isMode
                ? <input type="text"
                         autoFocus={true}
                         onChange={(e) => this.changeStatus(e)}
                         onBlur={this.deactivateEditMode}
                         value={this.state.statusText}/>
                : <span
                    onClick={this.activateEditMode}>{`${this.props.status ? this.props.status : ' _empty_'}`}</span>}
            </div>
        )
    }
}

export default ProfileStatus;