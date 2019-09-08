import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageProfile from "./components/PageProfile/PageProfile";
import PageDialogue from "./components/PageDialogue/PageDialogue";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <div className={'app_wrapper'}>

            <Header/>
            <div className={'Content'}>

                <Route path='/profile' render={() => <PageProfile/>}/>
                <Route path='/messages' render={() => <PageDialogue/>}/>
                <Route path='/users' render={() => <UsersContainer/> }/>

            </div>

        </div>
    );
};

export default App;