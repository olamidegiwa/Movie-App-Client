import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/SignUp/SignUp";
import Bookmak from "./pages/Bookmark/Bookmak";
import Error from "./pages/Error/Error";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster postion="top-right" />
        <AuthProvider>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/tvseries" element={<TvSeries />} />

              <Route element={<PrivateRoute />}>
                <Route path="/bookmark" element={<Bookmak />} />
              </Route>
            </Route>

            <Route element={<AuthLayout />}>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
