import { createContext, useContext, useState, useCallback } from "react";
import { kakaoSearch } from "../modules/kakaoBookFetch";
import { userBook } from "../data/sampleData";

const BookContext = createContext();

const useBookContext = () => {
  return useContext(BookContext);
};

const BookContextProvider = ({ children }) => {
  const [kakaoDataList, setKakaoDataList] = useState([]);
  const [dbData, setDbData] = useState(userBook);

  const bookInsert = async (clickData) => {
    // console.log(clickData);
    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clickData),
    };

    try {
      const res = await fetch("/book/insert", fetchOption);
      const result = res.json();
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

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
    kakaoDataList,
    setKakaoDataList,
    bookInsert,
    dbData,
    setDbData,
  };

  return <BookContext.Provider value={props}>{children}</BookContext.Provider>;
};

export { BookContextProvider, useBookContext };
