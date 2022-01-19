import React from 'react';
import { connect } from 'react-redux';
import Preloader from '../Common/Preloader/Preloader';
import { follow, getUsers, unfollow } from './../../redux/usersReducer';
import { getCurrentPageSelector, getUsersSelectorSuper, getFollowingProgressSelector, getIsFetchingSelector, getPageSizeSelector, getTotalUsersCountSelector, getUsersSelector } from './../../redux/usersSelectors';
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
    users: getUsersSelectorSuper(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingProgress: getFollowingProgressSelector(state),
  }
}

export default connect(mapStateToProps, {
  getUsers, follow, unfollow,
})(UsersContainer);

