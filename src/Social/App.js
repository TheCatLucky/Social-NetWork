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
              />} />
            <Route path="/profile" element={
              <Profile
                postsData={props.appState.profilePage.postsData}
                addPost={props.addPost}
                removePost={props.removepost}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.appState.profilePage.newPostText}
              />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;