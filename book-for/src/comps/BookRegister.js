import BookInput from "./BookInput";

const BookRegister = () => {
  return (
    <div>
      <BookInput />
      <div>
        <label>책 이름 : </label>
        <input></input>
      </div>
      <div>
        <label>저자 : </label>
        <input></input>
      </div>
      <div>
        <label>ISBN : </label>
        <input></input>
      </div>
      <div>
        <label>산 날짜: </label>
        <input></input>
      </div>
    </div>
  );
};
export default BookRegister;
