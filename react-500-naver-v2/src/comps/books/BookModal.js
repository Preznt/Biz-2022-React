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
        open ? "w3-display-container w3-display-middle w3-show" : " w3-hide"
      }
      style={{ width: "100%", zIndex: 20 }}
    >
      <div
        className="w3-display-middle w3-white w3-border"
        style={{ width: "1000px" }}
      >
        <header className="w3-green w3-padding-16">
          <h2>{bookItem.title}</h2>
        </header>
        <div className="book detail">
          <img
            src={bookItem.image}
            className="w3-border w3-padding w3-margin"
            style={{ width: "400px" }}
          />
          <div className="w3-left-align w3-margin">
            <label>ISBN : </label>
            <input className="w3-input" value={bookItem.isbn} />
            <label>저자 : </label>
            <input className="w3-input" value={bookItem.author} />
            <label>출판사 : </label>
            <input className="w3-input" value={bookItem.publisher} />
            <label>가격 : </label>
            <input className="w3-input" value={bookItem.discount} />
            <label>할인가격 : </label>
            <input className="w3-input" value={bookItem.discount} />
            <label>링크 : </label>
            <input className="w3-input" value={bookItem.link} />
            <label>구입일 : </label>
            <input
              className="w3-input"
              onChange={onChangeHandler}
              type="date"
            />
            <button
              className="w3-button w3-border w3-bar w3-margin-top"
              onClick={onClickHandler}
            >
              추가
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
