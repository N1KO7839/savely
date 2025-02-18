import {create} from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.VITE_AUTH_API_URL || 'http://localhost:8080/api/auth/';

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
    user: null,
    isAuthenticated: false,
    error: null,
    isCheckingAuth: true,

    signup: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}signup`, {
                email: email,
                password: password
            });
            set({user: response.data.user, isAuthenticated: true});
        } catch (error) {
            set({error: error.response.data.message || "Error with signing up"});
        }
    },
    verifyEmail: async (verifyCode) => {
        try {
            const response = await axios.post(`${API_URL}verify-email`, {
                code: verifyCode
            });
            set({user: response.data.user, isAuthenticated: true});
        } catch (error) {
            set({error: error.response.data.message || "Errow with verifying"})
        }
    },
    login: async (email, password) => {
        try {
            const response = await axios.post(`${API_URL}login`, {
                email: email,
                password: password,
            }
        );
            set({user: response.data.user, isAuthenticated: true, error: null})
        } catch (error) {
            set({error: error.response.data.message || "Errow with logging in"})
        }
    },
    logout: async () => {
        try {
            const response = await axios.post(`${API_URL}logout`)
            set({user: null, isAuthenticated: false})
        } catch (error) {
            
        }
    },
    checkAuth: async () => {
        set({isCheckingAuth: true, error:null})
        try {
            const response = await axios.get(`${API_URL}check-auth`);
            set({user:response.data.user, isCheckingAuth: false, isAuthenticated: true})
        } catch (error) {
            set({error:error.response.data.message || "Error with checking authentication", isCheckingAuth:false, isAuthenticated:false})
        }
    }
}));