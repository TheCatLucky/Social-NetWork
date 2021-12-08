import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "./App.css"
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';




const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={
              <Dialogs
                messagesData={props.appState.dialogsPage.messagesData}
                dialogsData={props.appState.dialogsPage.dialogsData}
                newMessageText={props.appState.dialogsPage.newMessageText}
                dispatch={props.dispatch}
              />} />
            <Route path="/profile" element={
              <Profile
                postsData={props.appState.profilePage.postsData}
                newPostText={props.appState.profilePage.newPostText}
                dispatch={props.dispatch}
              />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;