import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from './../../API/Api';
import { setAuthUserData } from './../../redux/authReducer';
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getCurrentUser()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          this.props.setAuthUserData(id, email, login);
        }
      })
  }

  render() {
    return <>
      <Header {...this.props} />
    </>
  }
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})
export default connect(mapStateToProps, {
  setAuthUserData
})(HeaderContainer);