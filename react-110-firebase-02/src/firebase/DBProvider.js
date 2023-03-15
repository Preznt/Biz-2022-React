import { createContext, useContext, useState } from "react";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore/lite";
import { getDatabase } from "firebase/database";
import { firebaseApp } from "./FirebaseConfig";
import { useAuthContext } from "./AuthProvider";

// const db = getDatabase(firebaseApp);
const db = getFirestore(firebaseApp);

const DBContext = createContext();

export const useDBContext = () => {
  return useContext(DBContext);
};

const TODO = {
  id: "",
  email: "",
  sdate: "",
  stime: "",
  content: "",
  edate: "",
  etime: "",
};

export const DBContextProvider = ({ children }) => {
  // 두개의 프로바이더가 연결되어버리는 현상
  const { loginUser } = useAuthContext();
  const [todo, setTodo] = useState(TODO);
  const [todoList, setTodoList] = useState([]);

  const getTodoList = async () => {
    if (loginUser) {
      try {
        // fireStore 의 todoList Document 정보를 가져오기
        const docRef = await doc(db, "todoList", loginUser?.email);
        // 실제 데이터 가져오기
        const result = await getDoc(docRef);

        if (result.exists()) {
          setTodoList([...result]);
        }
      } catch (e) {
        console.log(e.code);
      }
    }
  };

  // todoList.insert 자바에서는
  const insertTodoList = async (todo) => {
    if (todo && todo?.email) {
      try {
        const docRef = await doc(db, "todoList", loginUser.email);
        await setDoc(docRef, todo);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const props = { todo, todoList, getTodoList, insertTodoList };
  return <DBContext.Provider value={props}>{children}</DBContext.Provider>;
};
