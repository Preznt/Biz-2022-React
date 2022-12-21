import BookInput from "./BookInput";
import BookNav from "./BookNav";
import BookContent from "./BookContent";
import "../css/Main.css";
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
  return (
    <div className="Main">
      <BookNav />
      {/* <BookInput bookSearch={bookSearch} /> */}
      <BookContent />
    </div>
  );
};

export default BookMain;
