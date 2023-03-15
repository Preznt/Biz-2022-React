import {
  Card,
  CardContent,
  CardMedia,
  SvgIcon,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDBContext } from "../../firebase/DBProvider";

const TodoItem = ({ todo }) => {
  const { itemDelete } = useDBContext();
  const onClickDeleteHandler = (id) => {
    if (window.confirm("삭제할까요?")) {
      itemDelete(id);
    }
  };

  return (
    <Card sx={{ maxwidth: 300, margin: "13px auto" }}>
      <CardMedia sx={{ height: 150 }} image="/images/todo_1.jpg" />
      <CardContent>
        <Typography component="body2" variant="h5">
          {todo.content}
        </Typography>
        <Typography
          onClick={() => {
            onClickDeleteHandler(todo.id);
          }}
          component="body2"
          variant="h5"
          sx={{ color: "red" }}
        >
          <SvgIcon component={DeleteIcon} inheritViewBox />
        </Typography>
        <Typography component="body2">{todo.sdate}</Typography>
        <Typography component="body2">{todo.stime}</Typography>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
