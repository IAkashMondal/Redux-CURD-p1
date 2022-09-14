import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { GET_BOOKS } from '../Redux/AppRedux/action'
import BookCard from './BookCard'
const BookList = () => {
    const books = useSelector((state)=> state.AppReducer.books)
    const dispatch =useDispatch();
    useEffect(()=>{
        if(books.length===0){
            dispatch(GET_BOOKS)
        }
    })
  return (
    <BookListWrapper>
      <header>BOOK LIST</header>
      <>{
        books.length > 0 && books.map((sb)=>
              <BookCard key={sb.id} Sbook={sb}/>
        )
        }</>

    </BookListWrapper>
  )
}

export default BookList
export const BookListWrapper = styled.div`
width:100%;
border: 1px solid blue;
`