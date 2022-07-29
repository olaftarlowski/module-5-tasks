import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Task1 from "./components/Task1/Task1";
// import { UserContainer } from "./components";
import RouterPage from "./components/Task5/Router";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* <Task1 /> */}
          {/* <Task2 /> */}
          {/* <Task3/> */}
          {/* <UserContainer /> */}
          <RouterPage />
        </header>
      </div>
    </Router>
  );
}

export default App;
