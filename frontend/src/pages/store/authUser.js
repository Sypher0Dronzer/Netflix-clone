import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,

  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credentials);

      toast.success("Account created successfully");
      set({ user: response.data.user, isSigningUp: false });
    } catch (err) {
      toast.error(err.response.data.message || "An Error occured");
      set({ isSigningUp: false, user: null });
    }
  },

  login: async () => {},

  logout: async () => {},

  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get("/api/v1/auth/authCheck");
      console.log(response.data.user);
      
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (err) {
        console.log(err.message);
        
      set({ isCheckingAuth: false, user: null });
    }
  },
}));
