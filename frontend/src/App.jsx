import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/home/HomePage";
import SignUpPage from "./pages/SignUpPage";
import Footer from "./pages/components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./pages/store/authUser";
import { useEffect } from "react";

export default function App() {
  const {user,isCheckingAuth,authCheck}= useAuthStore()
  useEffect(()=>{
    authCheck()
  },[])
  return (<>
    <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Toaster/>
      <Footer/>
  </>
  )
}