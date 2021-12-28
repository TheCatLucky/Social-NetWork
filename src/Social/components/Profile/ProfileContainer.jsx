import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import { usersAPI } from './../../API/Api';
import { setUserProfile } from './../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = "";
    if (!this.props.match) {
      userId = 2;
    }
    else { userId = this.props.match.params.userId; }
    usersAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data);
      })
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
  }
}

const ProfileMatch = (props) => {
  let match = useMatch("/profile/:userId/");
  return (
    <ProfileContainer {...props} match={match} />
  )
}

export default connect(mapStateToProps, {
  setUserProfile
})(ProfileMatch);