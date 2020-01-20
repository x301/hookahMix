import React from 'react'
import { PaginatorPages, ArrowRight, ArrowLeft } from './Paginator.styled';

const Paginator = ({ totalMixes, mixesPerPage, paginate, currentPage }) => {
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalMixes / mixesPerPage); i++) {
        pageNum.push(i)
    }
    const ArrowPaginate = (number) => {
        if (!number && currentPage > pageNum[0]) {
            paginate(-1)
        } else if (number && currentPage < pageNum.length) {
            paginate(1)
        }
    }

    return (
        <PaginatorPages>
            <ArrowLeft onClick={(e) => {
                e.preventDefault();
                ArrowPaginate(false)
            }}>
                <div></div>
                <div></div>
            </ArrowLeft>
            {`${currentPage} / ${pageNum.length}`}



            <ArrowRight onClick={(e) => {
                e.preventDefault();
                ArrowPaginate(true)
            }}>
                <div></div>
                <div></div>
            </ArrowRight>
        </PaginatorPages>
    )
}
export default Paginator