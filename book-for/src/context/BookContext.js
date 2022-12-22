import { createContext, useContext } from "react";
import { kakaoSearch } from "../modules/kakaoBookFetch";

const BookContext = createContext();

const useBookContext = () => {
  return useContext(BookContext);
};

const BookContextProvider = ({ children }) => {
  const getBooks = async (search) => {
    try {
      const params = {
        query: search,
        size: 10,
        target: "title",
      };
      const result = await kakaoSearch(params);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const bookSearch = (search) => {
    getBooks(search);
  };

  const props = {
    bookSearch,
  };

  return <BookContext.Provider value={props}>{children}</BookContext.Provider>;
};

export { BookContextProvider, useBookContext };
