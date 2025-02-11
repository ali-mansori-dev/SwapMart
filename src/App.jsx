import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { log_out, log_in } from "./features/auth/authSlice";
import { useResponsive } from "./context/ResponsiveContext";
import ScrollToTop from "./shared/components/layout/scroll_to_top";
import Supabase from "./lib/helper/ClientSupabase";
import MyBookmark from "./pages/panel/my_saved";
import AuthModal from "./shared/components/auth/modal";
import Dashboard from "./pages/panel/dashboard";
import AuthGuard from "./middleware/AuthGuard";
import SinglePost from "./pages/single_post";
import MyNotes from "./pages/panel/my_notes";
import CreatePost from "./pages/create_post";
import MySeens from "./pages/panel/my_seens";
import MyPost from "./pages/panel/my_post";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Home from "./pages/home";
import Category from "./pages/category";

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
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/:slug" element={<Home isMobile={isMobile} />} />
        <Route path="/category/:slug" element={<Category isMobile={isMobile} />} />
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
            element={<AuthGuard component={<MyNotes isMobile={isMobile} />} />}
          />
          <Route
            path="recent"
            element={<AuthGuard component={<MySeens isMobile={isMobile} />} />}
          />
        </Route>
      </Routes>
      <AuthModal />
    </Router>
  );
};

export default App;
