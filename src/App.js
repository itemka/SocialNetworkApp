import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import PageProfileContainer from "./components/PageProfile/PageProfileContainer";
import PageUsers from "./components/PageUsers/PageUsers";
import HeaderContainer from "./components/Header/HeaderContainer";
import PageDialogueContainer from "./components/PageDialogue/PageDialogueContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {checkUserDataThunkCreator} from "./Redux/AuthReducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializedTC} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {
    componentDidMount = () => this.props.initializedTC();

    render() {
        if (!this.props.initialized) return <Preloader/>;
        else return (
            <div className={'app_wrapper'}>
                <HeaderContainer/>
                <div className={'Content'}>
                    <Route path='/profile/:userId?' render={() => <PageProfileContainer/>}/>
                    <Route path='/messages' render={() => <PageDialogueContainer/>}/>
                    <Route path='/users' render={() => <PageUsers/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
                <Redirect to={`/profile`}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
};
export default compose(
    withRouter,
    connect(mapStateToProps, {checkUserDataThunkCreator, initializedTC}))(App);