import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ProfileInput from "./Stateless Component/ProfileInput";


const Main = () => (
    <div>
        <Routes>
            <Route path="/" element={<ProfileInput/>}>
                {/*<Route path="profile" element={<ProfileInput/>}/>*/}
            </Route>
        </Routes>

    </div>
);

export default Main;