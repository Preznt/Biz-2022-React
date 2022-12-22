import "../css/Main.css";

const SearchItem = (props) => {
  const { kkData } = props;
  return (
    <div className="searchdata">
      <img src={kkData.thumbnail} />
      <div className="detail">
        <div className="title">제목 : {kkData.title}</div>
        <div>저자 : {kkData.authors}</div>
        <div>출판사 : {kkData.publisher}</div>
        <button>추가</button>
      </div>
    </div>
  );
};

export default SearchItem;
