import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { LoadingScreenFixed } from "./shared/loader";
import SinglePost from "./pages/single_post";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import About from "./pages/About";
import Home from "./pages/Home";
import MyPost from "./pages/panel/my_post";
import MyBookmark from "./pages/panel/my_bookmark";
import MyNotes from "./pages/panel/my_notes";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreenFixed />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/v/:slug" element={<SinglePost />} />
          <Route path="/my-panel/my-post" element={<MyPost />} />
          <Route path="/my-panel/saved" element={<MyBookmark />} />
          <Route path="/my-panel/notes" element={<MyNotes />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
