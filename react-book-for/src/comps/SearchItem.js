import "../css/Main.css";
import { useBookContext } from "../context/BookContext";

const SearchItem = (props) => {
  const { bookInsert, dbData, setDbData } = useBookContext();
  const { kkData } = props;

  const onClickHandler = async () => {
    await setDbData({
      ...dbData,
      b_code: kkData.isbn,
    });
    console.log(dbData);

    bookInsert(dbData);
  };

  return (
    <div className="searchdata">
      <img src={kkData.thumbnail} />
      <div className="detail" data-kk={kkData.title}>
        <div className="title">제목 : {kkData.title}</div>
        <div>저자 : {kkData.authors}</div>
        <div>출판사 : {kkData.publisher}</div>
        <button onClick={onClickHandler}>추가</button>
      </div>
    </div>
  );
};

export default SearchItem;
