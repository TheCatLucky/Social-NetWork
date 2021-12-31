import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useMatch } from 'react-router-dom';
import { getProfile } from './../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = "";
    if (!this.props.match) {
      userId = 2;
      //userId = this.props.userId;      
    }
    else { userId = this.props.match.params.userId; }
    this.props.getProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
  }
}

const ProfileMatch = (props) => {
  let match = useMatch("/profile/:userId/");
  return (
    <ProfileContainer {...props} match={match} />
  )
}

export default compose(
  connect(mapStateToProps, { getProfile }),
)(ProfileMatch);