import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { LoadingScreenFixed } from "./shared/loader";
import SinglePost from "./pages/single_post";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
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
import { useResponsive } from "./context/ResponsiveContext";
import Supabase from "./lib/helper/ClientSupabase";
import { useDispatch } from "react-redux";
import {
  log_in,
  log_out,
} from "./features/auth/authSlice";

const App = () => {
  const dispatch = useDispatch();
  Supabase.auth.onAuthStateChange((event, session) => {
    switch (event) {
      case "INITIAL_SESSION":
        if (session)
          return log_in({
            user_info: session?.user,
            access_token: session?.user?.access_token,
          });
        return;
      case "SIGNED_IN":
        if (session)
          dispatch(
            log_in({
              user_info: session?.user,
              access_token: session?.user?.access_token,
            })
          );
        return;
      case "SIGNED_OUT":
        dispatch(log_out());
        return;
      default:
        return;
    }
  });

  const { isMobile } = useResponsive();
  return (
    <Router>
      <Suspense fallback={<LoadingScreenFixed />}>
        <Routes>
          <Route path="/" element={<Home isMobile={isMobile} />} />
          <Route path="/new" element={<CreatePost isMobile={isMobile} />} />
          <Route path="/signup" element={<Signup isMobile={isMobile} />} />
          <Route path="/signin" element={<Signin isMobile={isMobile} />} />
          <Route path="/v/:slug" element={<SinglePost isMobile={isMobile} />} />
          <Route path="/my-panel">
            <Route
              path="dashboard"
              element={
                <AuthGuard component={<Dashboard isMobile={isMobile} />} />
              }
            />
            <Route
              path="my-post"
              element={<AuthGuard component={<MyPost isMobile={isMobile} />} />}
            />
            <Route
              path="saved"
              element={
                <AuthGuard component={<MyBookmark isMobile={isMobile} />} />
              }
            />
            <Route
              path="notes"
              element={
                <AuthGuard component={<MyNotes isMobile={isMobile} />} />
              }
            />
            <Route
              path="recent"
              element={
                <AuthGuard component={<MySeens isMobile={isMobile} />} />
              }
            />
            <Route
              path="my-post/edit/:slug"
              element={
                <AuthGuard component={<EditPost isMobile={isMobile} />} />
              }
            />
          </Route>
        </Routes>
        <AuthModal />
      </Suspense>
    </Router>
  );
};

export default App;
