import {MouseEvent} from 'react'

export default interface IPaginateButtonProp {
    handlePageClick: (e: MouseEvent<HTMLButtonElement>)=> void
    pageNumber: number,
    currentPage: number
}