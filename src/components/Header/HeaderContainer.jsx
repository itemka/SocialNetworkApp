import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setUserFoto} from "../../Redux/AuthReducer";
import axios from 'axios';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                // if we have login (resultCode === 0) then we can make request to get setUserData
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setUserData(id, email, login);
                        if (this.props.isAuth){
                            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
                                .then(response=>{
                                    this.props.setUserFoto(response.data.photos.small)
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