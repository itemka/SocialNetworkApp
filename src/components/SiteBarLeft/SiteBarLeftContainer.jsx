import {connect} from "react-redux";
import SiteBarLeft from "./SiteBarLeft";

const mapStateToProps = state => {
    return {
        siteBarLeft: state.siteBarLeft,
    }
};
const mapDispatchToProps = () => {
    return {}
};
const SiteBarLeftContainer = connect(mapStateToProps, mapDispatchToProps)(SiteBarLeft);

export default SiteBarLeftContainer;