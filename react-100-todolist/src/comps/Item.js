const item = (props) => {
  const { todo, deleteTodo } = props;

  const deleteHandler = (e) => {
    const tr = e.target.closest("TR");
    const todoId = tr.dataset.id;
    if (window.confirm(`할일을 삭제할까요?`)) {
      deleteTodo(todoId);
    }
  };

  const lineClickHandler = (e) => {
    const tr = e.target.closest("TR");
    const td = e.target;
    if (tr.className === "check") {
      tr.classList.remove("check");
      td.classList.remove("line");
    } else {
      tr.classList.add("check");
      td.classList.add("line");
    }
  };

  return (
    <tr data-id={todo.t_seq}>
      <td onClick={deleteHandler} className="delete">
        &times;
      </td>
      <td onClick={lineClickHandler}>{todo.t_content}</td>
      <td className="checkbox">&#10003;</td>
    </tr>
  );
};
export default item;
