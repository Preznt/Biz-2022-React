import { useCallback, useEffect, useRef, useState } from "react";
import { useBBsContext } from "../context/BBsContextProvider";

console.log("선언부");

/**
 * JS 코드의 Top Level Area
 * 여기는 전체적으로 사용하는 변수, 함수를 선언하는 곳
 * 물론 여기에서 어떤 코드를 실행할 수도 있지만
 * 보통은 선언부만 작성을 한다
 */
const clickHandler = () => {
  console.log("clickHandler");
};

const BBs = () => {
  // comps header 의 코드들은 Top Down 방식으로 실행된다
  console.log("Comps Header");
  const { username, book, counter, onCounterClickHandler } = useBBsContext();

  /**
   * state 변수는 변수값을 변화시키면 화면이 reRendering 된다
   * 코드를 실행하는 과정에서 값을 유지하면서 Rendering 을 방지하는
   * 목적으로 내부적으로 선언하여 사용하는 변수
   */

  return (
    <>
      <h1>여기는 BBS 메인 화면</h1>
      <h2>{username}</h2>
      {console.log("Comps Body")}
      <h2 onClick={onCounterClickHandler}>Counter : {counter}</h2>
      <h1>도서명 : {book.title}</h1>
    </>
  );
};

export default BBs;
