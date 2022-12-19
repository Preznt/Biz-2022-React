import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/Todo.css";
import { useState } from "react";
import uuid from "react-uuid";

const TodoMain = () => {
  const [todoData, setTodoData] = useState({ t_seq: null, t_content: "" });

  const [todoList, setTodoList] = useState([]);

  const todoInsert = () => {
    setTodoList([
      ...todoList,
      { t_seq: uuid(), t_content: todoData.t_content },
    ]);
  };

  const deleteTodo = (seq) => {
    const newTodoList = todoList.filter((todo) => {
      return todo.t_seq !== seq;
    });
    setTodoList([...newTodoList]);
  };

  return (
    <div className="todo main">
      <TodoInput
        todoData={todoData}
        setTodoData={setTodoData}
        todoInsert={todoInsert}
      />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoMain;
