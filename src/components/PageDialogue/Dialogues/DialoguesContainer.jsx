import {connect} from "react-redux";
import Dialogues from "./Dialogues";

const mapStateToProps = state => {
    return {
        profiles: state.pageProfile.profiles,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const DialoguesContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogues);

export default DialoguesContainer;