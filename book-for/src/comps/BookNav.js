import { Link } from "react-router-dom";

const BookNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">등록하기</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BookNav;
