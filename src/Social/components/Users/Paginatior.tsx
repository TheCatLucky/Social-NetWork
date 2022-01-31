import classNames from "classnames";
import { FC, useState } from "react";
import style from "./Users.module.css";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  portionSize: number;
  currentPage: number;
  onPageChanged: (pageNumber:number) => void;
};

const Paginatior: FC<PropsType> = (props) => {
  const [portionNumber, setPortionNumber] = useState(1);
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages:Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / props.portionSize);
  let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPortionPageNumber = portionNumber * props.portionSize;
  return (
    <div className={style.pagesNumber}>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => {
          return (
            <span
              key={p}
              className={classNames(props.currentPage === p && style.selected, style.pageNumber)}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
    </div>
  );
};
export default Paginatior;