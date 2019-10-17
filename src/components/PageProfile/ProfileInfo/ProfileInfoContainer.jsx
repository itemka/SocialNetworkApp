import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {UpdateStatusProfilePageThunkCreator} from "../../../Redux/ProfileReducer";

const mapStateToProps = state => {
    return {
        profile: state.pageProfile.profile,
        status: state.pageProfile.status,

        // photoProfile: state.pageProfile.profiles[0].photoProfile,
        // name: state.pageProfile.profiles[0].name,
        // dataOfBirth: state.pageProfile.profiles[0].dataOfBirth,
        // city: state.pageProfile.profiles[0].city,
        // education: state.pageProfile.profiles[0].education,
        // webSite: state.pageProfile.profiles[0].webSite,
    }
};

const ProfileInfoContainer = connect(mapStateToProps, {UpdateStatusProfilePageThunkCreator})(ProfileInfo);

export default ProfileInfoContainer;