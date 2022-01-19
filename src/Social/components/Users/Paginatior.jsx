import classNames from 'classnames';
import style from './Users.module.css';

const Paginatior = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={style.pagesNumber}>
      {pages.map(p => {
        return <span key={p} className={classNames(props.currentPage === p && style.selected, style.pageNumber)}
          onClick={() => { props.onPageChanged(p) }}>{p}</span>
      })}
    </div>
  )
}
export default Paginatior;