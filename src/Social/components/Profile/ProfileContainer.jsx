import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from './../../Hoc/WithAuthRedirect';
import { changeStatus, getProfile, getStatus, updateStatus } from './../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match?.params.userId;
    if (!userId) {
      userId = this.props.userId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  }
}

const ProfileMatch = (props) => {
  let match = useMatch("/profile/:userId/");
  return (
    <ProfileContainer {...props} match={match} />
  )
}

export default compose(
  connect(
    mapStateToProps, { getProfile, getStatus, updateStatus, changeStatus }
  ),
withAuthRedirect
)(ProfileMatch);