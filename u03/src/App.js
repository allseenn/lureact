import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Users from "./components/Users";
import UserId from "./components/UserId";
import Error from "./components/Error";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/users" element={<Users/>} />
          <Route path="/users/:userName" element={<UserId/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
    </Router>
    </>
  );
}
export default App;
