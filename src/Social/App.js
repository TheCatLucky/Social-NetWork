import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import "./App.css";
import Preloader from './components/Common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { initializeApp } from './redux/appReducer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

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
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={
                  <Navigate to="/profile"
                  />} />
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
                <Route path="*" element={
                  <div>404 not found</div>} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({ initialized: state.app.initialized })

export default connect(mapStateToProps, { initializeApp })(App);