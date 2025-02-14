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
import SingleProducts from "./pages/product";
import MyNotes from "./pages/panel/my_notes";
import CreatePost from "./pages/create_post";
import MySeens from "./pages/panel/my_seens";
import MyPost from "./pages/panel/my_post";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Home from "./pages/home";
import Category from "./pages/category";
import FilterPage from "./pages/filter";
import CartPage from "./pages/cart";
import PaymentSuccess from "./pages/success";
import NotFound from "./pages/notfound/index";
import LoadingModal from "./shared/components/modal/loading";
import PaymentFailure from "./pages/failure";

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
      {/* <LoadingModal/> */}
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/cart" element={<CartPage isMobile={isMobile} />} />
        <Route path="/success" element={<PaymentSuccess isMobile={isMobile} />} />
        <Route path="/failure" element={<PaymentFailure isMobile={isMobile} />} />
        <Route path="/category/:slug" element={<Category isMobile={isMobile} />} />
        <Route path="/filter/:slug" element={<FilterPage isMobile={isMobile} />} />
        <Route path="/new" element={<CreatePost isMobile={isMobile} />} />
        <Route path="/signup" element={<Signup isMobile={isMobile} />} />
        <Route path="/signin" element={<Signin isMobile={isMobile} />} />
        <Route path="/v/:id" element={<SingleProducts isMobile={isMobile} />} />
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
        <Route path="*" element={<NotFound isMobile={isMobile} />} />
      </Routes>
      <AuthModal />
    </Router>
  );
};

export default App;
