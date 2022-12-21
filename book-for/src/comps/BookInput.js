import { CiSearch } from "react-icons/ci";
import { useBookContext } from "../context/BookContext";
const BookInput = () => {
  const { bookSearch } = useBookContext();

  const onKeyDownHandler = (e) => {
    const keyCode = e.keyCode;
    const value = e.target.value;
    if (keyCode === 13) {
      bookSearch(value);
    }
  };

  return (
    <>
      <input placeholder="도서 이름 입력" onKeyDown={onKeyDownHandler} />
      <CiSearch className="search" />
    </>
  );
};

export default BookInput;
