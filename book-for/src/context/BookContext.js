import { createContext, useContext } from "react";

const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const getBooks = async (search) => {
    try {
      const params = {
        query: search,
        size: 45,
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

  return <BookContext.Provider>{children}</BookContext.Provider>;
};

export default { BookContextProvider };
