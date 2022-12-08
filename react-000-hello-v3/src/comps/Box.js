import boxStyle from "../css/Box.module.css";

const Box = (props) => {
  const { children } = props;
  // 내부에 스크립트를 넣겠다는 의미
  return <div className={`${boxStyle.container}`}>{children}</div>;
};

export default Box;
