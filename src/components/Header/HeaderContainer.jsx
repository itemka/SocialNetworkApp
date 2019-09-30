import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setUserFoto} from "../../Redux/AuthReducer";
import {getProfilePhotoAPI, setUserDataAPI} from "../../API/API";

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        setUserDataAPI().then(data => {
            if (data.resultCode === 0) { // if we have login (resultCode === 0) then we can make request to get setUserData
                let {id, email, login} = data.data;
                this.props.setUserData(id, email, login);
                if (this.props.isAuth) {
                    getProfilePhotoAPI(id).then(data => {
                        this.props.setUserFoto(data.photos.small)
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
    return {isAuth: state.authUserData.isAuth, login: state.authUserData.login, userFoto: state.authUserData.userFoto}
};
export default connect(mapStateToProps, {setUserData, setUserFoto})(HeaderContainer);