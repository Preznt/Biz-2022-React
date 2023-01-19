export const getMyBooks = async (username) => {
  try {
    const response = await fetch(`/api/book/my/${username}`);
    const result = await response.json();

    return result;
  } catch (e) {
    return null;
  }
};

export const addMyBooks = async (book, username) => {
  const fetchOption = {
    method: "POST",
    body: JSON.stringify({ book: book, username: username }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch("/api/book/insert", fetchOption);
  /**
   * 수신한 Http 프로토콜의 response 객체에서 json type 의 데이터만 getter 하여
   * result 변수에 담아달라
   *
   * fetch 안에는  헤더나 바디등 많은 게 들어있는데 그 중에서 body안에 있는 json 을 뽑아내는 것
   * json parse 까지 해서 받는 것
   */
  const result = await response.json();
  console.log("addMyBook", result);

  /**
   * Vanila JS 엔진에는 고유의 내장 객체가 있다
   * 그중에 JSON 객체 : json type 의 데이터를 변환하거나 적절하게 가공하는 용도
   *
   * 아래 선언은 json type 으로 보이지만 String 데이터이다
   * const jsonString = `
   * {"name": "홍길동","age" :33}
   * `
   *
   * jsonString.name 을 참조하면 오류가 난다. 변수 없음!!!
   *
   * 이 문자열을 실제 JSON 데이터로 변환 하려면
   * JSON 내장객체에 미리 준비된 parse() 함수를 사용하여 JSON 객체로 변환 해 주어야 한다
   * const jsonObj = JSON.parse(jsonString)
   * 이제 비로소
   * console.log(jsonString.name) 을 참조할 수 있다. 결과로 홍길동 값이 console에 출력
   *
   * internet TCP/IP 라는 프로토콜중의 http(s) 프로토콜을 사용하여 데이터를 주고 받는데
   * 여기에 주고 받을 수 있는 데이터는 모두가 char들(문자 들)이다
   * 애플리케이션 내에서 어떤 type 의 데이터가 만들어지더라도 이 데이터를 http 프로토콜에
   * 실어서 보내려면 반드시 char(문자 들)의 집합으로 만들어야 한다
   *  이것을 네트워크 이론에서는 Serialize 라고 한다.
   *
   * fetch 사용하여 데이터를 body 담을때 JSON.stringify() 함수를 사용하는 이유는
   * JSON 객체를 문자 들의 집합으로 변환하는 것
   *
   */
};
