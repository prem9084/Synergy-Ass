import logo from "./logo.svg";
import "./App.css";
import CreateUser from "./Component/CreateUser/CreateUser";
import { Routes, Route } from "react-router-dom";
import ShowUser from "./Component/ShowUser/ShowUser";
import EditUser from "./Component/EditUser/EditUser";
import HomePage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateUser />} />
        <Route path="/get" element={<ShowUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </>
  );
}

export default App;
