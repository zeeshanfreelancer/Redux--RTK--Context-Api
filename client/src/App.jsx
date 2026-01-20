import ContextTodo from "./components/ContextTodo";
import ReduxTodo from "./components/ReduxTodo";
import RTKTodo from "./components/RTKTodo";
import { TodoProvider } from "./context/TodoContext";
import { Provider } from "react-redux";
import { reduxStore } from "./app/reduxStore";
import { rtkStore } from "./app/rtkStore";

export default function App() {
  return (
    <div className="todos-row">
      {/* Context API Todo */}
      <TodoProvider>
        <ContextTodo />
      </TodoProvider>

      {/* Classic Redux Todo */}
      <Provider store={reduxStore}>
        <ReduxTodo />
      </Provider>

      {/* Redux Toolkit Todo */}
      <Provider store={rtkStore}>
        <RTKTodo />
      </Provider>
    </div>
  );
}
