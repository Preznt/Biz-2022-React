import BookInput from "./BookInput";
import { kakaoSearch } from "../modules/kakaoBookFetch";

const BookMain = () => {
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
  return <BookInput bookSearch={bookSearch} />;
};

export default BookMain;
