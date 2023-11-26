import { Route, Routes } from "react-router-dom";
import Categories from "./component/Categories";
import Featured from "./component/Featured";
import TopNav from "./component/TopNav";
import TopPicks from "./component/TopPicks";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Recipe from "./pages/Recipe";
import Community from "./pages/Community";
import RecipeDetail from "./pages/RecipeDetail";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/login":
      component = <Login />;
      break;
    case "/signup":
      component = <SignUp />;
      break;
    case "/Recipe":
      component = <Recipe />;
      break;
    case "/Recipe":
      component = <Community />;
      break;
  }
  return (
    <>
      <div className="container mx-auto px-5">
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/Recipe/:title" element={<RecipeDetail />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
