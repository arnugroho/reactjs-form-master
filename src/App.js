// import ProfileInput from './Home/Stateful Component/ProfileInput.js';
// import Main from './Home/index'
import {Link, Route, Routes} from 'react-router-dom';
import React, {Suspense, Fragment} from 'react';
import Loader from "react-js-loader";
import Main from "./Home";


function App() {
    return (
        <Fragment>
            <div className="App">
                <Suspense fallback={
                    <div className="loader-container">
                        <div className="loader-container-inner">
                            <div className="text-center">
                                <Loader type="semi-circle-spin"/>
                            </div>
                        </div>
                    </div>
                }>
                    <Main/>
                </Suspense>

                {/*<Route exact path="/" render={() => (
          <Link to="/main/profile" />
        )} />*/}
                {/*<Main />*/}
            </div>
        </Fragment>
    );
}

export default App;
