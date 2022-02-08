import classNames from "classnames";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Users.module.css";
import { actions } from "../../redux/Reducers/UsersReducer";

type PropsType = {
	totalUsersCount: number;
	pageSize: number;
	portionSize: number;
	currentPage: number;
};

const Paginatior: FC<PropsType> = ({ pageSize, totalUsersCount, portionSize, currentPage }) => {
	const [portionNumber, setPortionNumber] = useState(1);
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	const dispatch = useDispatch();
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	let portionCount = Math.ceil(pagesCount / portionSize);
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;
	const handleChange = (p: number) => {
		dispatch(actions.setCurrentPage(p));
	};
	return (
		<div className={style.pagesNumber}>
			{portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>}
			{pages
				.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => {
					return (
						<span
							key={p}
							className={classNames(currentPage === p && style.selected, style.pageNumber)}
							onClick={() => {
								handleChange(p);
							}}
						>
							{p}
						</span>
					);
				})}
			{portionCount > portionNumber && (
				<button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
			)}
		</div>
	);
};
export default Paginatior;
