import * as React from 'react'
import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile job="개발자" name="테오도르" />
      </div>
    )
  }
}

export default App;