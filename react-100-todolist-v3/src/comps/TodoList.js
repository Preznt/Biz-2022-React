import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { todoContentList, todoDelete, todoComplete, todoEditor } = props;

  const todoListItemView = todoContentList.map((Item) => {
    return (
      <TodoItem
        Item={Item}
        key={Item.id}
        todoDelete={todoDelete}
        todoComplete={todoComplete}
        todoEditor={todoEditor}
      />
    );
  });
  return <div>{todoListItemView}</div>;
};

export default TodoList;
