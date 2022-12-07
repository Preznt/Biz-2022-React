# React 의 state(상태) 개념

- React 에서 선언된 변수중에 화면에 값을 표현하는 용도로 사용되면
  절대 값을 직접 변경하여서는 안된다

```
// 아래와 같은 코드는 사용금지
let st_name = "홍길동"
st_name = "이몽룡"
```

- React 에서 화면에 값을 표현하는 변수를 state(상태)변수 라고 한다.
- 상태변수는 직접 값을 변경, 삭제 할수 없고, state 함수를 통하여 변경해야 한다.

### 상태변수, 상태함수 선언

```
const [변수명, set변수명]= useState("초기값")
const [객체, set객체명] = useState({속성1: 값, 속성2: 값})
const [배열, 상태함수]= useState([12,3,3,4,5,6,7,8])
```

### React 의 상태변수 변경

- React 는 상태변수가 변경되면 그 변경된 내용을 화면에 다시 그린다.

```
set변수명(새로운값)
set객체명({...객체, 속성1: 값}), set객체명(새로운객체)
set배열명([...새로운 배열]), set배열명(새로운배열)
```

### React 에서 상태변수를 변경하는 scope

- 상태변수는 반드시 생성한 컴포넌트에서 변경해야 한다
- 생성한 컴포넌트에서 상태변수를 변경하는 함수를 자식 컴포넌트에게 전달하고,
  전달받은 함수를 통하여 변경해야한다

### 폴더만들때 사용하는 명령어

create-react-app react-001
