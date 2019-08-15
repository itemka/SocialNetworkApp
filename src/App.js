import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import PageProfile from "./components/PageProfile/PageProfile";
import PageDialogue from "./components/PageDialogue/PageDialogue";
// import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className={'app_wrapper'}>
                <Header/>
                <div className={'Content'}>
                    <Route path='/profile' render={() => <PageProfile pageProfile={props.state.pageProfile}
                                                                      siteBar={props.state.siteBar}
                                                                      dataFunctions={props.state.dataFunctions}/> }/>
                    <Route path='/messages' render={() => <PageDialogue pageProfile={props.state.pageProfile}
                                                                        pageDialogue={props.state.pageDialogue}
                                                                        siteBar={props.state.siteBar}
                                                                        dataFunctions={props.state.dataFunctions}/>}/>
                </div>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
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