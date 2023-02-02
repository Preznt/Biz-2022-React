import logo from "./logo.svg";
import "./App.css";
import { images } from "./modules/images";
import { useState } from "react";

const IMAGE_WIDTH = 500;

function App() {
  const [position, setPosition] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  const imagePrev = () => {
    setPosition(true);
  };

  const imageNext = () => {
    setPosition(false);
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = "0.4";
  };

  const onDragEndHandler = (e) => {
    const box = e.currentTarget;
    box.style.opacity = "1";
    if (e.pageX < mouseX && position > -1 * (images.length - 1) * IMAGE_WIDTH) {
      setPosition(position - IMAGE_WIDTH);
    } else if (e.clientX > mouseX && position < 0) {
      setPosition(position + IMAGE_WIDTH);
    }
  };

  const onMouseDownHandler = (e) => {
    console.log(e.pageX);
    setMouseX(e.pageX);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div
        className="image-view"
        draggable="true"
        onDragOver={onDragOverHandler}
        onDragEnd={onDragEndHandler}
        onMouseDown={onMouseDownHandler}
      >
        <div
          style={{ transform: `translateX(${position}px)` }}
          className="image-box"
          draggable="false"
        >
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={index}
              key={index}
              draggable="false"
            />
          ))}
          {images.map((image, index) => (
            <img
              src={image}
              width="100%"
              height="100%"
              alt={`2_${index}`}
              key={`2_${index}`}
              draggable="false"
            />
          ))}
        </div>
      </div>
      <div className="button-box">
        <div className="button" onClick={imagePrev}>
          Prev
        </div>
        <div className="button" onClick={imageNext}>
          Next
        </div>
      </div>
    </div>
  );
}

export default App;
