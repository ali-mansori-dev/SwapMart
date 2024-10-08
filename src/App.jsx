import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Suspense } from "react";
import { LoadingScreenFixed } from "./shared/loader";
import SinglePost from "./pages/single_post";
import Signup from "./pages/signup";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreenFixed />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/v/:slug" element={<SinglePost />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
