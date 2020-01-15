import React from 'react'

export default ({ totalPosts, postsPerPage }) => {
    const pageNum = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNum.push(i)
    }
    return (
        <div>

        </div>
    )
}