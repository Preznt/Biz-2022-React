import { useCallback } from "react";

const TodoItem = ({ Item, todoDelete, todoComplete }) => {
  const deleteHandler = useCallback((e) => {
    const target = e.target;
    const uid = target.closest("DIV.item").dataset.id;
    if (window.confirm("할일 아이템을 삭제합니다")) {
      // TodoMain 에게 uid를 보내서 삭제
      todoDelete(uid);
    }
  });

  const completeHandler = (e) => {
    const target = e.target;
    const uid = target.closest("DIV.item").dataset.id;
    todoComplete(uid);
  };

  return (
    <div className="item" data-id={Item.id}>
      <div className="delete" onClick={deleteHandler}>
        &times;
      </div>
      <div className="sdate">
        <div>{Item.s_date}</div>
        <div>{Item.s_time}</div>
      </div>
      <div className={Item.e_date ? "content line" : "content"}>
        {Item.t_content}
      </div>
      <div className="complete" onClick={completeHandler}>
        &#x2713;
      </div>
    </div>
  );
};

export default TodoItem;
