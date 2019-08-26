import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageProfile from "./components/PageProfile/PageProfile";
import PageDialogue from "./components/PageDialogue/PageDialogue";
// import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <div className={'app_wrapper'}>

            <Header/>
            <div className={'Content'}>
                <Route path='/profile' render={() =>
                    <PageProfile pageProfile={props.state.pageProfile}
                                 siteBarLeft={props.state.siteBarLeft}
                                 dispatch={props.store.dispatch.bind(props.store)}
                    />
                }/>
                <Route path='/messages' render={() =>
                    <PageDialogue pageProfile={props.state.pageProfile}
                                  pageDialogue={props.state.pageDialogue}
                                  siteBarLeft={props.state.siteBarLeft}
                                  dispatch={props.store.dispatch.bind(props.store)}
                    />
                }/>
            </div>
            {/*<Footer/>*/}

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