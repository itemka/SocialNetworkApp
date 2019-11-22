import React, {useState} from 'react';
import css from './Users.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import UserContainer from "./User/UserContainer";
import {PaginatorsButton} from "./PaginatorsButton/PaginatorsButton";

export const Users = ({totalUsersCount, pageSize, users, currentPage, setCurrentPageMethod, isFetching, portionSize = 5}) => {
    let pagesCounter = Math.ceil(totalUsersCount / pageSize);
    let pagesCounterArray = [];
    for (let i = 1; i <= pagesCounter; i++) pagesCounterArray.push(i);

    let AllUsers = users.map(user => <UserContainer user={user}/>);

    let portionCount = Math.ceil(pagesCounter / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
        <div className={css.BlockUsers}>
            {!users.length ? <div>Users note found</div> : null}
            <div className={css.center}>
                {portionNumber > 1 &&
                <button className={css.nextPage} onClick={() => setPortionNumber(portionNumber - 1)}>BACK</button>}
                {pagesCounterArray
                    .filter(pageN => pageN >= leftPortionPageNumber && pageN <= rightPortionPageNumber)
                    .map(pageNumber => {
                            // if (((pageNumber >= props.currentPage - 1) && (pageNumber <= props.currentPage + 1)) || (pageNumber === props.currentPage)) {
                            return <PaginatorsButton key={pageNumber} pageNumber={pageNumber}
                                                     currentPage={currentPage}
                                                     callback={() => setCurrentPageMethod(pageNumber)}/>
                            // }
                        }
                    )}
                {portionCount > portionNumber &&
                <button className={css.nextPage} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
            </div>
            <br/><br/>
            {isFetching ? <Preloader/> : null}
            {AllUsers}
        </div>
    )
};