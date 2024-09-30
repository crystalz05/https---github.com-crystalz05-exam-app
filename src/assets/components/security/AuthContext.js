import React, { createContext, useContext, useState } from "react";
import {
  executeJwtAuthentication,
  executeSignUp,
  retriveUserId,
} from "../api/ApiClient";
import { apiClient } from "../api/ApiClient";
import { useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const initialAuthStatus =
    JSON.parse(sessionStorage.getItem("isAuthenticated")) || false;

  const initialToken = sessionStorage.getItem("token") || null;

  const initialUserId = sessionStorage.getItem("userId") || null;

  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthStatus);

  const [questionsAnswered, setQuestionAnswered] = useState(0);
  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);

  const login = async (username, password) => {
    try {
      const response = await executeJwtAuthentication(username, password);

      const jwtToken = response.data.token;

      if (response.status === 200) {
        const fullToken = "Bearer " + jwtToken;
        setToken(fullToken);

        apiClient.interceptors.request.use((config) => {
          // console.log('Intercepting and adding token')
          config.headers.Authorization = fullToken;
          return config;
        });

        const response2 = await retriveUserId(username);
        setUserId(response2.data);

        setIsAuthenticated(true);
        sessionStorage.setItem("isAuthenticated", JSON.stringify(true));
        sessionStorage.setItem("token", fullToken);
        sessionStorage.setItem("userId", response2.data);
        return true;
      }
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    }
  };

  const signUp = async (name, username, password) => {
    try {
      const response = await executeSignUp(name, username, password);
      return true;
    } catch (error) {
      return false;
    }
  };

  function logout() {
    setIsAuthenticated(false);
    setToken(null);
    setUserId(null);
    sessionStorage.removeItem("isAuthenticated");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
  }
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ""; // Chrome requires returnValue to be set
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        userId,
        signUp,
        token,
        questionsAnswered,
        setQuestionAnswered,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
