import "../../css/Modal.css";
import { addMyBooks } from "../../service/book.service";
import { useBookContext } from "../../context/BookContextProvider";
import { useUserContext } from "../../context/UserContextProvider";

const BookModal = ({ open }) => {
  const { bookItem, setBookItem, modalOpenToggle } = useBookContext();
  const { sessionUser } = useUserContext();

  const onChangeHandler = (e) => {
    setBookItem({ ...bookItem, odate: e.target.value });
    console.log(bookItem);
  };

  const onClickHandler = () => {
    addMyBooks(bookItem, sessionUser.username);
    modalOpenToggle("open");
  };
  return (
    <div
      className={
        open ? "w3-card-4 w3-white Modal open" : "w3-card-4 Modal close"
      }
    >
      <header>{bookItem.title}</header>
      <img src={bookItem.image} />
      <div className="book detail">
        <label>ISBN : </label>
        <input value={bookItem.isbn} />
        <label>저자 : </label>
        <input value={bookItem.author} />
        <label>출판사 : </label>
        <input value={bookItem.publisher} />
        <label>가격 : </label>
        <input value={bookItem.discount} />
        <label>할인가격 : </label>
        <input value={bookItem.discount} />
        <label>링크 : </label>
        <input value={bookItem.link} />
        <label>구입일 : </label>
        <input onChange={onChangeHandler} type="date" />
      </div>
      <button className="w3-button w3-border w3-bar" onClick={onClickHandler}>
        추가
      </button>
    </div>
  );
};

export default BookModal;
