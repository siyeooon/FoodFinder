import { Route, Routes } from "react-router-dom";
import TopNav from "./component/TopNav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recipe from "./pages/Recipe";
import Community from "./pages/Community";
import Ingredient from "./pages/Ingredient";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <div className="container mx-auto px-5">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Ingredient" element={<Ingredient />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
