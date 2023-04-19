import Home from "./container/home/Home";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Login from "./container/Auth/Login";
import Register from "./container/Auth/Register";
import Contact from './components/Contact/Contact'
import About from './components/About/About'


export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  );
}
