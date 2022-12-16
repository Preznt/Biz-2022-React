/**
 * 함수형 컴포넌트
 */
const BookInput = (props) => {
  const { bookData, setBookData, bookSearch } = props;

  const bTitleInputChange = (e) => {
    const value = e.target.value;
    // setBookData를 여기서 선언해서 쓸수는 또 없다
    setBookData({ ...bookData, b_title: value });
  };

  const onKeyDownHandler = (e) => {
    const keyCode = e.keyCode;
    const value = e.target.value;
    if (keyCode === 13) {
      // BookMain.js 의 bookSearch() 함수에게
      // 입력 문자열을 전달하기
      bookSearch(value);
      e.target.value = "";
      // alert(value);
    }
  };

  return (
    <div className="container">
      <input
        onKeyDown={onKeyDownHandler}
        onChange={bTitleInputChange}
        value={bookData.b_title}
        name="b_title"
        placeholder="도서명입력 후 Enter..."
      />
    </div>
  );
};
export default BookInput;
