import BookInput from "./BookInput";
import { BiAlignLeft } from "react-icons/bi";

const BookHeader = () => {
  return (
    <header>
      <BiAlignLeft className="menu" />
      <h1>Book For</h1>
      <BookInput />
      <button>회원가입</button>
      <button>로그인</button>
    </header>
  );
};

export default BookHeader;
