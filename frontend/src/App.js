import Home from "./container/home/Home";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Misc/Form/Nav";
import Login from "./container/Auth/Login";
import Register from "./container/Auth/Register";
import ForgetPassword from "./container/Auth/ForgetPassword";
import EmailVerification from './container/Auth/EmailVerification'

import NotFound from './components/Misc/NotFound';


export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Login />} />
        <Route path="/auth/signup" element={<Register />} />
        <Route path='/auth/verification' element={<EmailVerification/>}/>
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}
