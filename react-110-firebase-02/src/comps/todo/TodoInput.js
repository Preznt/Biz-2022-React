import { Container, TextField } from "@mui/material";
import { useState } from "react";
import { useDBContext } from "../../firebase/DBProvider";
import moment from "moment";
import { useAuthContext } from "../../firebase/AuthProvider";

const TodoInput = () => {
  const { loginUser } = useAuthContext();
  const { insertTodoList } = useDBContext();
  const [content, setContent] = useState();
  const onChangeHandler = (e) => {
    setContent(e.target.value);
  };
  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      // alert(`안녕 ${content}`);
      const todo = {
        email: loginUser?.email,
        sdate: moment().format("YYYY[-]MM[-]DD"),
        stime: moment().format("HH:mm:ss"),
        content: content,
        edate: "",
        etime: "",
      };
      insertTodoList(todo);
    }
  };
  return (
    <Container maxWidth="xl" fixed>
      <div>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="할일 입력 한 후 Enter..."
          value={content}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </Container>
  );
};

export default TodoInput;
