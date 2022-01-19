import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Preloader from './components/Common/Preloader/Preloader';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/appReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/dialogs/*" element={
                <DialogsContainer
                  store={this.props.store}
                />} />
              <Route path="/profile/*" element={
                <ProfileContainer
                  store={this.props.store}
                />} />
              <Route path="/users" element={
                <UsersContainer
                  store={this.props.store}
                />} />
              <Route path="/login" element={
                <LoginContainer
                  store={this.props.store}
                />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized })

export default connect(mapStateToProps, { initializeApp })(App);