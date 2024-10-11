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
import Dashboard from "./pages/panel";
import CreatePost from "./pages/create_post";
import MySeens from "./pages/panel/my_seens";
import EditPost from "./pages/edit_post";
import AuthGuard from "./middleware/AuthGuard";
import AuthModal from "./components/auth/modal";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreenFixed />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<CreatePost />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/v/:slug" element={<SinglePost />} />
          <Route
            path="/my-panel/dashboard"
            element={<AuthGuard component={<Dashboard />} />}
          />
          <Route
            path="/my-panel/my-post"
            element={<AuthGuard component={<MyPost />} />}
          />
          <Route
            path="/my-panel/saved"
            element={<AuthGuard component={<MyBookmark />} />}
          />
          <Route
            path="/my-panel/notes"
            element={<AuthGuard component={<MyNotes />} />}
          />
          <Route
            path="/my-panel/recent"
            element={<AuthGuard component={<MySeens />} />}
          />
          <Route
            path="/my-panel/my-post/edit/:slug"
            element={<AuthGuard component={<EditPost />} />}
          />
        </Routes>
        <AuthModal />
      </Suspense>
    </Router>
  );
};

export default App;
