import Item from "./Item";

const TodoList = (props) => {
  const { todoList, deleteTodo } = props;

  const todoTableList = todoList?.map((todo) => (
    <Item key={todo.t_seq} todo={todo} deleteTodo={deleteTodo} />
  ));

  return (
    <table className="todo table">
      <tbody>{todoTableList}</tbody>
    </table>
  );
};
export default TodoList;
