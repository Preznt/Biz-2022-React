import { Button, Container, TextField, Box } from "@mui/material";
import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthContext } from "../firebase/AuthProvider";

const EmailLogin = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { loginMessage, emailLogin } = useAuthContext();
  // ?변수 = 값 형식의 query 를 가져오는 함수
  const [queryString] = useSearchParams();
  // ?login=값 형식의 query 에서 값 부분을 추출하여 login 변수에 할당
  const login = queryString.get("login");

  const onChangeHandler = useCallback(
    (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    },
    [setUser, user]
  );
  return (
    <Container fixed maxWidth="xl">
      {login === "required" ? (
        <Box
          component="div"
          sx={{
            mb: "30px",
            mt: "20px",
            p: "16px",
            display: "block",
            backgroundColor: "red",
            borderRadius: "15px",
            color: "yellow",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          권한이 없습니다 로그인을 하세요
        </Box>
      ) : (
        <></>
      )}
      <div>
        <TextField
          name="email"
          variant="outlined"
          value={user.email}
          onChange={onChangeHandler}
          fullWidth
          margin="dense"
          label="EMAIL"
          error={loginMessage.id === "email"}
          helperText={loginMessage.id === "email" ? loginMessage.message : ""}
        />
      </div>
      <div>
        <TextField
          name="password"
          value={user.password}
          variant="outlined"
          onChange={onChangeHandler}
          fullWidth
          margin="dense"
          label="PASSWORD"
          type="password"
          error={loginMessage.id === "password"}
          helperText={
            loginMessage.id === "password" ? loginMessage.message : ""
          }
        />
      </div>
      {loginMessage.id === "etc" ? <p>{loginMessage.message}</p> : <></>}
      <div>
        <Button
          variant="outline"
          onClick={() => {
            emailLogin(user);
          }}
        >
          Email 로그인
        </Button>
      </div>
    </Container>
  );
};
export default EmailLogin;
