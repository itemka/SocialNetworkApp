import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {UpdateStatusProfilePageThunkCreator} from "../../../Redux/ProfileReducer";
import {getProfileS, getProfileStatusS} from "../../../Redux/ProfileSelectors";

const mapStateToProps = state => {
    return {
        profile: getProfileS(state),
        status: getProfileStatusS(state),
    }
};

const ProfileInfoContainer = connect(mapStateToProps, {UpdateStatusProfilePageThunkCreator})(ProfileInfo);

export default ProfileInfoContainer;