import "../css/Puzzle.css";
import PuzzleImage from "./PuzzleImage";
import { PuzzleContextProvider } from "../context/PuzzleContext";
const PuzzleMain = () => {
  return (
    <PuzzleContextProvider>
      <PuzzleImage />
    </PuzzleContextProvider>
  );
};

export default PuzzleMain;
