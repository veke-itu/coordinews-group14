import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import Ideas from "./Components/Ideas";
import Articles from "./Components/Articles";
import Staff from "./Components/Staff";
import LandingPage from "./Components/LandingPage";
import AddArticle from "./Components/AddArticle";
import ArticleId from "./Components/ArticleId";
import Form from "./Components/Form";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <NavigationBar />

        <Routes>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="ideas" element={<Ideas />} />
          <Route path="articles" element={<Articles />} />
          <Route path="staff" element={<Staff />} />
          <Route path="Add_Article" element={<AddArticle />} />
          <Route
            path="/articles/articleDetails/:articleId"
            element={<ArticleId />}
          />
          <Route path="/addIdea" element={<Form />} />

          <Route path="/" element={<LandingPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
