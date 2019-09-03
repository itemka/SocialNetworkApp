import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

const mapStateToProps = state => {
    return {
        photoProfile: state.pageProfile.profiles[0].photoProfile,
        name: state.pageProfile.profiles[0].name,
        dataOfBirth: state.pageProfile.profiles[0].dataOfBirth,
        city: state.pageProfile.profiles[0].city,
        education: state.pageProfile.profiles[0].education,
        webSite: state.pageProfile.profiles[0].webSite,
    }
};
const mapDispatchToProps = () => {
    return {}
};

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;