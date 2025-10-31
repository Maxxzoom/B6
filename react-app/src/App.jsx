import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import { Link, Route, Routes } from "react-router";
import Setting from "./pages/setting";
import Profile from "./pages/profile";
import User from "./pages/user";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/tejas">Go to user Tejas</Link>
        <Link to="/user/suyash">Go to user Suyash</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Setting />} />
        </Route>
        <Route path="/user/:name" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
