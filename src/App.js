import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageProfile from "./components/PageProfile/PageProfile";
import PageDialogue from "./components/PageDialogue/PageDialogue";
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';

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

App.propTypes = {
    pageProfile: PropTypes.shape({
        profiles: PropTypes.array.isRequired,
        posts: PropTypes.array.isRequired,
        newPost: PropTypes.string.isRequired,
    }).isRequired,
    siteBar: PropTypes.shape({
        siteBarLeft: PropTypes.object.isRequired,
        siteBarRight: PropTypes.object.isRequired,
    }).isRequired,
    pageDialogue: PropTypes.shape({
        message: PropTypes.array.isRequired,
    }).isRequired,
};

export default App;