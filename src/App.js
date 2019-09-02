import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageProfile from "./components/PageProfile/PageProfile";
import PageDialogue from "./components/PageDialogue/PageDialogue";
import {Route} from "react-router-dom";

const App = () => {
    return (
        <div className={'app_wrapper'}>

            <Header/>
            <div className={'Content'}>

                <Route path='/profile' render={() => <PageProfile /> }/>
                <Route path='/messages' render={() => <PageDialogue /> }/>

            </div>

        </div>
    );
};

export default App;