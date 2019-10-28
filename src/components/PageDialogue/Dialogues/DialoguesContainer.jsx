import {connect} from "react-redux";
import Dialogues from "./Dialogues";
import {getProfilesS} from "../../../Redux/ProfileSelectors";

const mapStateToProps = state => ({profiles: getProfilesS(state)});
const mapDispatchToProps = () => {};
const DialoguesContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogues);

export default DialoguesContainer;