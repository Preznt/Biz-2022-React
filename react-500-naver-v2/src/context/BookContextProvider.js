import { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [bookList, setBookList] = useState([]);
  const [bookItem, setBookItem] = useState({});
  const [openModal, setOpenModal] = useState({
    open: false,
  });

  const naver_search = async () => {
    const res = await fetch(`/api/book/search?search=${search}`);
    const result = await res.json();
    if (!result?.CODE) {
      setBookList([...result]);
    }

    console.log(result);
  };

  const modalOpenToggle = (name) => {
    setOpenModal({ ...openModal, [name]: !openModal[name] });
  };

  const propsStore = {
    search,
    setSearch,
    bookList,
    setBookList,
    naver_search,
    openModal,
    setOpenModal,
    modalOpenToggle,
    bookItem,
    setBookItem,
  };
  return (
    <BookContext.Provider value={propsStore}>{children}</BookContext.Provider>
  );
};
