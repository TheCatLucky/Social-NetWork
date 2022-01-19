import Paginatior from './Paginatior';
import User from "./User";
const Users = (props) => {
  return (
    <>
      <Paginatior
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      {props.users.map((u) => <User user={u}
        key={u.id}
        followingProgress={props.followingProgress}
        follow={props.follow}
        unfollow={props.unfollow}
      />
      )}
    </>
  )
}
export default Users;