import BookInput from "./BookInput";
import BookNav from "./BookNav";
import BookContent from "./BookContent";
import BookHeader from "./BookHeader";
import BookRegister from "./BookRegister";
import "../css/Main.css";
import { kakaoSearch } from "../modules/kakaoBookFetch";

const BookMain = () => {
  return (
    <div className="Main">
      <BookHeader />
      <div className="article">
        <BookNav />
        {/* <BookInput bookSearch={bookSearch} /> */}
        {/* <BookContent/> */}
        <BookRegister />
      </div>
      <button className="register">책 등록하기</button>
    </div>
  );
};

export default BookMain;
