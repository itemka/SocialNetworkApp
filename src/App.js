import React, {lazy} from 'react';
import './App.css';
import {HashRouter, NavLink, Redirect, Route, Switch} from "react-router-dom";
import PageProfileContainer from "./components/PageProfile/PageProfileContainer";
import PageUsers from "./components/PageUsers/PageUsers";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {checkUserDataThunkCreator} from "./Redux/AuthReducer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {initializedTC} from "./Redux/AppReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./Redux/StoreRedux";
import PageDialogueContainer from "./components/PageDialogue/PageDialogueContainer";
import {Error404} from "./components/Common/Error404/Error404";
//import {withSuspense} from "./hoc/withSuspense";
// const PageDialogueContainer = lazy(() => import('./components/PageDialogue/PageDialogueContainer'));

class App extends React.Component {
    componentDidMount = () => this.props.initializedTC();

    render() {
        if (!this.props.initialized) return <Preloader/>;
        else return (
            <div className={'app_wrapper'}>
                <HeaderContainer/>
                <div className={'Content'}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/profile/:userId?' render={() => <PageProfileContainer/>}/>
                        <Route path='/messages' render={() => <PageDialogueContainer/>}/>
                        <Route path='/users' render={() => <PageUsers/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path='*' render={() => <Error404/>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        initialized: state.app.initialized
    }
};
let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {checkUserDataThunkCreator, initializedTC}))(App);

export const MainApp = () => (
    <HashRouter>
        {/*<BrowserRouter basename={process.env.PUBLIC_URL}>*/}
        {/*HashRouter - should be for GitHub Pages*/}
        {/*BrowserRouter - should be for usual server*/}
        <Provider store={store}>
            <AppContainer/>
        </Provider>
        {/*</BrowserRouter>*/}
    </HashRouter>
);