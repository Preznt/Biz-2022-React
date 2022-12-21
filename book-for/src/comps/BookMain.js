import BookInput from "./BookInput";
import BookNav from "./BookNav";
import BookContent from "./BookContent";
import BookHeader from "./BookHeader";
import "../css/Main.css";
import { BookContextProvider } from "../context/BookContext";

const BookMain = () => {
  return (
    <BookContextProvider>
      <div className="Main">
        <BookHeader />
        <div className="article">
          <BookNav />
          <BookContent />
        </div>
        <button className="register">책 등록하기</button>
      </div>
    </BookContextProvider>
  );
};

export default BookMain;
