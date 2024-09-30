import React, { useEffect } from "react";
import "./App.css";
import Completed from "./assets/components/Completed";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Login from "./assets/components/Login";
import Main1 from "./assets/components/Main1";
import SelectStart from "./assets/components/SelectStart";
import SignUp from "./assets/components/Signup";
import Test from "./assets/components/Test";
import Trials from "./assets/components/Trials";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AuthProvider, {
  useAuth,
} from "./assets/components/security/AuthContext";

function AuthenticatedRoute({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

function AuthenticatedRoute2({ children }) {
  const authContext = useAuth();

  if (authContext.isAuthenticated) {
    return <Navigate to="/select-test" />;
  } else {
    return children;
  }
}

function App() {
  return (
    <div className="lg:bg-site bg-no-repeat bg-cover">
      <div className="w-screen h-full relative bg-black/40  backdrop-blur-sm overflow-hidden">
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <AuthenticatedRoute2>
                    <Main1 />
                  </AuthenticatedRoute2>
                }
              ></Route>

              <Route
                path="/signup"
                element={
                  <AuthenticatedRoute2>
                    <SignUp />
                  </AuthenticatedRoute2>
                }
              ></Route>

              <Route
                path="/login"
                element={
                  <AuthenticatedRoute2>
                    <Login />
                  </AuthenticatedRoute2>
                }
              ></Route>

              <Route
                path="/select-test"
                element={
                  <AuthenticatedRoute>
                    <SelectStart />
                  </AuthenticatedRoute>
                }
              ></Route>

              <Route
                path="/test/:subject"
                element={
                  <AuthenticatedRoute>
                    <Test />
                  </AuthenticatedRoute>
                }
              ></Route>

              <Route
                path="/completed"
                element={
                  <AuthenticatedRoute>
                    <Completed />
                  </AuthenticatedRoute>
                }
              ></Route>
            </Routes>

            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </div>
      <div className=""></div>
    </div>
  );
}

export default App;
