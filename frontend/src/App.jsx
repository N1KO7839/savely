import { useEffect } from "react";
import {Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import VerifyCode from "./VerifyCode";
import { useAuthStore } from "./store/authStore";

const ProtectRoutes = ({children}) => {
  const {user, isAuthenticated} = useAuthStore();
  
  if(!isAuthenticated){
    return <Navigate to='/login' replace/>
  }
  
  if(!user.verified){
    return <Navigate to='/verify-code' replace/>
  }
  return children
}

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user, isCheckingAuth } = useAuthStore();

  if (isCheckingAuth) {
    return (
      <div className="flex justify-center items-center h-screen">
      <img
        className="w-16 animate-spin"
        src="./src/assets/loading.png"
        alt="loading"
      />
      </div>
    );  }

  if (isAuthenticated && user?.verified) {
    return <Navigate to="/" replace />;
  }

  return children;
};


function App() {
  const { isAuthenticated, checkAuth} = useAuthStore();
  useEffect(() => {
    checkAuth();
  },[checkAuth])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectRoutes><Home /></ProtectRoutes>} />

        <Route path="/login" element={<RedirectAuthenticatedUser><Login /></RedirectAuthenticatedUser>} />

        <Route path="/signup" element={<RedirectAuthenticatedUser><Signup /></RedirectAuthenticatedUser>} />

        <Route path="/verify-code" element={<RedirectAuthenticatedUser><VerifyCode /></RedirectAuthenticatedUser>} />
      </Routes>
    </Router>
  );
  
}


export default App;
