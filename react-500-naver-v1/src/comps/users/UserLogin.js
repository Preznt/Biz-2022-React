import { useUserContext } from "../../context/UserContextProvider";

const UserLogin = () => {
  const { loginUser, setLoginUser, userLogin } = useUserContext();
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

  return (
    <div className="w3-container w3-padding-24 w3-center">
      <input
        value={loginUser.username}
        onChange={onChangeHandler}
        name="username"
        placeholder="USERNAME"
        className="w3-input"
      />
      <input
        name="password"
        value={loginUser.password}
        onChange={onChangeHandler}
        placeholder="PASSWORD"
        className="w3-input"
        type="password"
      />
      <button
        onClick={() => userLogin()}
        className="w3-button w3-orange w3-block w3-round w3-margin-top w3-padding-16"
      >
        로그인
      </button>
    </div>
  );
};

export default UserLogin;
