import React from 'react';
import './App.css';
import PageDialogue from "./components/PageDialogue/PageDialogue";
import {Route} from "react-router-dom";
import PageProfileContainer from "./components/PageProfile/PageProfileContainer";
import PageUsers from "./components/PageUsers/PageUsers";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = () => {
    return (
        <div className={'app_wrapper'}>

            <HeaderContainer/>
            <div className={'Content'}>

                <Route path='/profile/:userId?' render={() => <PageProfileContainer/>}/>
                <Route path='/messages' render={() => <PageDialogue/>}/>
                <Route path='/users' render={() => <PageUsers/> }/>

            </div>

        </div>
    );
};

export default App;