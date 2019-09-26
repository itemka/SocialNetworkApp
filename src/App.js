import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageDialogue from "./components/PageDialogue/PageDialogue";
import {Route} from "react-router-dom";
import PageProfileContainer from "./components/PageProfile/PageProfileContainer";
import PageUsers from "./components/PageUsers/PageUsers";


const App = () => {
    return (
        <div className={'app_wrapper'}>

            <Header/>
            <div className={'Content'}>

                <Route path='/profile/:userId?' render={() => <PageProfileContainer/>}/>
                <Route path='/messages' render={() => <PageDialogue/>}/>
                <Route path='/users' render={() => <PageUsers/> }/>

            </div>

        </div>
    );
};

export default App;