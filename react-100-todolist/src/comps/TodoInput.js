const TodoInput = (props) => {
  const { todoData, setTodoData, todoInsert } = props;

  const todoInputChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setTodoData({ ...todoData, t_content: value });
  };

  const todokeyDownHandler = (e) => {
    // const value = e.target.value;
    if (e.keyCode === 13) {
      // setTodoData({ ...todoData, t_content: value });
      todoInsert();
      e.target.select();
    }
  };

  const btnClickHandler = (e) => {
    todoInsert();
    // const input = e.target.previousSibling;
    // if (e.target.tagName === "BUTTON") {
    //   setTodoData({ ...todoData, t_content: input.value });
    //   todoInsert();
    //   input.select();
    // }
  };

  return (
    <div className="container">
      <input
        placeholder="오늘 할 일을 입력해주세요"
        onChange={todoInputChange}
        onKeyDown={todokeyDownHandler}
      />
      <button onClick={btnClickHandler}>추가</button>
    </div>
  );
};

export default TodoInput;
