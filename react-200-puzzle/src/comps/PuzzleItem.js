import { usePuzzleContext } from "../context/PuzzleContext";
const PuzzleItem = ({ item }) => {
  const { piece, imgFile } = usePuzzleContext();

  const imgStyle = {
    background: `url(${imgFile.url})`,
    backgroundSize: "500px 400px",
    backgroundPositionX: `${item.posX}px`,
    backgroundPositionY: "0",
    width: `${500 / (piece / 2)}px`,
    height: `${500 / (piece / 2)}px`,
  };
  return (
    <li>
      <img style={imgStyle}></img>
    </li>
  );
};

export default PuzzleItem;
