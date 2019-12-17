import * as React from 'react'
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile job="개발자" name="테오도르" />
        <Counter />
        <TodoList />
      </div>
    )
  }
}

export default App;