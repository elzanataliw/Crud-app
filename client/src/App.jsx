import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { Context, ContextProvider } from "./context/Context";


function App() {
  const { user } = useContext(Context);
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
          <Route path="/post/:postId" element={<Single />} />
        </Routes>
      </ContextProvider>
    </>

  );
}

export default App;