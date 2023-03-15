import { Container } from "@mui/system";
import { useEffect } from "react";
import { useDBContext } from "../../firebase/DBProvider";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList, getTodoList } = useDBContext();
  useEffect(() => {
    getTodoList();
  }, []);

  const listView = todoList.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
  return (
    <Container maxWidth="xl" sx={{ margin: "10px auto" }}>
      {listView}
    </Container>
  );
};

export default TodoList;
