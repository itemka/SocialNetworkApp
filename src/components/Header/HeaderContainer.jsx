import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setUserPhoto} from "../../Redux/AuthReducer";
import {api} from "../../API/API";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        api.setUserDataAPI().then(data => {
            if (data.resultCode === 0) { // if we have login (resultCode === 0) then we can make request to get setUserData
                let {id, email, login} = data.data;
                this.props.setUserData(id, email, login);
                if (this.props.isAuth) {
                    api.getProfilePhotoAPI(id).then(data => {
                        this.props.setUserPhoto(data.photos.small)
                    })
                }
            }
        })
    };

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = state => {
    return {isAuth: state.authUserData.isAuth, login: state.authUserData.login, userPhoto: state.authUserData.userPhoto}
};
export default connect(mapStateToProps, {setUserData, setUserPhoto})(HeaderContainer);