import './index.css';
import Todo from "./components/Todo.js";
import TodoInput from "./components/TodoInput.js";
import Actions from "./components/Actions.js";
const todos=[
  {
    title : "item 1",
    status: false,
  },
  {
    title : "item 2",
    status: true,
  },
  {
    title : "item 3",
    status: false,
  }
]
export default function App() {
  return (
    <div ClassName="container">
        <div ClassName="form">
          <TodoInput />
          <Actions />
        </div>
    
        <div ClassName="list">
          <Todo title={todos[0].title} status={todos[0].status}/>
          <Todo title={todos[1].title} status={todos[1].status}/>
          <Todo title={todos[2].title} status={todos[2].status}/>
        </div>
    </div>
  );
}


