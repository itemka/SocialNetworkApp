import {connect} from "react-redux";
import SiteBarLeft from "./SiteBarLeft";

const mapStateToProps = state => ({siteBarLeft: state.siteBarLeft});
const SiteBarLeftContainer = connect(mapStateToProps, {})(SiteBarLeft);
export default SiteBarLeftContainer;