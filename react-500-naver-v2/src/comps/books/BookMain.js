import { useState } from "react";
import BookList from "./BookList";
import BookSearchInput from "./BookSearchInput";
import CardMain from "../CardMain";
import "../../css/Book.css";
import BookModal from "./BookModal";
import { useBookContext } from "../../context/BookContextProvider";

const BookMain = () => {
  const { openModal } = useBookContext();

  return (
    <>
      <CardMain header={<BookSearchInput />} maxHeight="600px" width="70%">
        <BookList />
      </CardMain>
      <BookModal open={openModal.open} />
    </>
  );
};

export default BookMain;
