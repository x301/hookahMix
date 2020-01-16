import React from 'react'
import { PaginatorPages } from './Paginator.styled';

const Paginator = ({ totalMixes, mixesPerPage, paginate }) => {
    const pageNum = [];

    for (let i = 1; i <= Math.ceil(totalMixes / mixesPerPage); i++) {
        pageNum.push(i)
    }

    return (
        <PaginatorPages>
            <ul>
                {pageNum.map((number) => {
                    return <li key={number}>
                        <a onClick={(e) => {
                            e.preventDefault();
                            paginate(number)
                        }} href="!#" >{number}</a>
                    </li>
                })}
            </ul>
        </PaginatorPages>
    )
}
export default Paginator