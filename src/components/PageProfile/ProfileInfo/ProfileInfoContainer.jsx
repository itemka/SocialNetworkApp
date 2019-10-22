import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {UpdateStatusProfilePageThunkCreator} from "../../../Redux/ProfileReducer";

const mapStateToProps = state => {
    return {
        profile: state.pageProfile.profile,
        status: state.pageProfile.status,
    }
};

const ProfileInfoContainer = connect(mapStateToProps, {UpdateStatusProfilePageThunkCreator})(ProfileInfo);

export default ProfileInfoContainer;