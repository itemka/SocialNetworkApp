import React from 'react';
import {connect} from 'react-redux';
import PageProfile from './PageProfile';
import axios from 'axios';
import {setUserProfile} from "../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";

class PageProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 1579;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(respons => {
                this.props.setUserProfile(respons.data);
            })
    }

    render() {
        return (
            <div>
                <PageProfile/>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {}
};
let WithUrlDataContainerComponent = withRouter(PageProfileContainer);
const ConnectedPageProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
export default ConnectedPageProfileContainer;