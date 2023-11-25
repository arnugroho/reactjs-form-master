import React from 'react';
import {Route, Routes} from 'react-router-dom';
import ProfileInput from "./StatelessComponent/ProfileInput";
import Profile from "./StatelessComponent/Profile";
import TableProfile from "./StatelessComponent/TableProfile";


const Main = () => (
    <div>
        <Routes>
            <Route path="/" element={<ProfileInput/>}/>
            <Route path="profile" element={<Profile/>}/>
        </Routes>

    </div>
);

export default Main;