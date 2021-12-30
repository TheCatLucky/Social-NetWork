import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={
              <DialogsContainer
                store={props.store}
              />} />
            <Route path="/profile/*" element={
              <ProfileContainer
                store={props.store}
              />} />
            <Route path="/users" element={
              <UsersContainer
                store={props.store}
              />} />
            <Route path="/login" element={
              <LoginContainer
                store={props.store}
              />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;