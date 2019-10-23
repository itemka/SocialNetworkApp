import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import PageProfileContainer from "./components/PageProfile/PageProfileContainer";
import PageUsers from "./components/PageUsers/PageUsers";
import HeaderContainer from "./components/Header/HeaderContainer";
import PageDialogueContainer from "./components/PageDialogue/PageDialogueContainer";
import LoginContainer from "./components/Login/LoginContainer";

class App extends React.Component {
    render() {
        return (
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

export default App;