import React from 'react';
import SiteBarRight from "./SiteBarRight";
import {connect} from "react-redux";
import {SetCountUsersThuncCreator} from "../../Redux/SiteBarRightReducer";

class SiteBarRightContainer extends React.Component {
    componentDidMount() {
        this.props.SetCountUsersThuncCreator();
    }

    render() {
        return <SiteBarRight/>
    }
}

export default connect(null, {SetCountUsersThuncCreator,})(SiteBarRightContainer);