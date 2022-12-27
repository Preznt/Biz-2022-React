import { createContext, useContext, useState } from "react";

const PuzzleContext = createContext();

const usePuzzleContext = () => {
  return useContext(PuzzleContext);
};

const PuzzleContextProvider = ({ children }) => {
  const [puzzlePiece, setPuzzlePiece] = useState([]);
  const [imgFile, setImgFile] = useState({});
  const [piece, setPiece] = useState(4);

  const puzzleShuffle = () => {
    if (!imgFile.url) {
      alert("이미지를 먼저 선택해 주세요");
      return false;
    }
    const pieceArray = Array(piece)
      .fill(0)
      .map((_, index) => {
        const pieceInfo = {
          posX: ((index + 1) % piece) * -100,
        };
        return pieceInfo;
      });

    // for (let i = 0; i < piece; i++) {
    //   const pieceInfo = {
    //     posX: (i % piece) * -100,
    //   };
    setPuzzlePiece([...pieceArray]);
  };

  const props = {
    imgFile,
    setImgFile,
    piece,
    setPiece,
    puzzleShuffle,
    puzzlePiece,
  };
  return (
    <PuzzleContext.Provider value={props}>{children}</PuzzleContext.Provider>
  );
};

export { PuzzleContextProvider, usePuzzleContext };
