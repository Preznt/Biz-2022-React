import { createContext, useContext, useState, useCallback } from "react";
import { kakaoSearch } from "../modules/kakaoBookFetch";

const BookContext = createContext();

const useBookContext = () => {
  return useContext(BookContext);
};

const BookContextProvider = ({ children }) => {
  const [kakaoDataList, setKakaoDataList] = useState([]);

  const getBooks = useCallback(async (search) => {
    try {
      const params = {
        query: search,
        size: 5,
        target: "title",
      };
      const result = await kakaoSearch(params);
      // console.log(result.data);
      return result.data;
    } catch (err) {
      console.log(err);
    }
  }, []);

  const bookSearch = (search) => {
    return getBooks(search);
  };

  const props = {
    bookSearch,
    getBooks,
  };

  return <BookContext.Provider value={props}>{children}</BookContext.Provider>;
};

export { BookContextProvider, useBookContext };
