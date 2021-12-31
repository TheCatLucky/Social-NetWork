import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from './../../Hoc/WithAuthRedirect';
import { follow, getUsers, unfollow } from './../../redux/usersReducer';
import Users from './Users';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          followingProgress={this.props.followingProgress}
          userId={this.props.userId}
          onPageChanged={this.onPageChanged}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  }
}

export default compose(
  connect(mapStateToProps, {
    getUsers, follow, unfollow,
  }),
  withAuthRedirect
)(UsersContainer);

