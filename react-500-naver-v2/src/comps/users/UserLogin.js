import { useUserContext } from "../../context/UserContextProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { User } from "../../models/User";

const UserLogin = () => {
  const { loginUser, setLoginUser, userLogin, inputRef } = useUserContext();
  // <Navigate state = "값"/> 처럼 redirect 를 수행하면
  // state 에 저장된 값을 useLocation() 이 가지고 있다
  const location = useLocation();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    /**
     * 계산된 property 를 활용하여
     * input tag 의 name 속성을 팜조하여
     * 여러개의 input change event 를 한개로 처리하기
     */
    // setLoginUser({...loginUser, username:"bjw"})
    setLoginUser({ ...loginUser, [name]: value });
  };

  const onClickHandler = async () => {
    await userLogin();

    // 100ms 동안 sleep
    await new Promise((r) => setTimeout(r, 100));

    await setLoginUser(new User()); // 로그인 입력박스 내용 지우기
    if (location?.state) navigate(location.state);
    else navigate("/");
  };

  return (
    <div className="w3-container w3-padding-24 w3-center">
      <input
        ref={inputRef.usernameRef}
        value={loginUser.username}
        onChange={onChangeHandler}
        name="username"
        placeholder="USERNAME"
        className="w3-input"
      />
      <input
        ref={inputRef.passwordRef}
        name="password"
        value={loginUser.password}
        onChange={onChangeHandler}
        placeholder="PASSWORD"
        className="w3-input"
        type="password"
      />
      <button
        onClick={onClickHandler}
        className="w3-button w3-orange w3-block w3-round w3-margin-top w3-padding-16"
      >
        로그인
      </button>
    </div>
  );
};

export default UserLogin;
