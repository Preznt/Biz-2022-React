import BookInput from "./BookInput";
import { BiAlignLeft } from "react-icons/bi";

const BookHeader = () => {
  return (
    <header>
      <BiAlignLeft className="menu" />
      <div>
        <h1>Book</h1>
        <h1>For</h1>
      </div>
      <BookInput />
      <button>회원가입</button>
      <button>로그인</button>
    </header>
  );
};

export default BookHeader;
