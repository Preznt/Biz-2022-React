import BookInput from "./BookInput";

const BookRegister = () => {
  return (
    <div>
      <BookInput />
      <div>
        <label>표지 : </label>
        <input name="b_thumbnail" type="file" />
      </div>
      <div>
        <label>책 이름 : </label>
        <input name="b_title" />
      </div>
      <div>
        <label>저자 : </label>
        <input name="b_author" />
      </div>
      <div>
        <label>위치: </label>
        <input name="b_location" />
      </div>
      <div>
        <label>산 날짜: </label>
        <input name="b_buy_date" />
      </div>
    </div>
  );
};
export default BookRegister;
