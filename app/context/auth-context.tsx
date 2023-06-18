"use client";

import { AuthProvider as ProviderType, User } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { SignInWith } from "@/app/authentication/controllers/auth";
import { useRouter } from "next/navigation";

const initialState = {
  currentUser: undefined,
  currentUserName: "",
  signInWithProvider: () => {},
  signInWithEmail: () => {},
};

const AuthContext = React.createContext<{
  currentUser: User | undefined;
  currentUserName: string;
  signInWithProvider: Function;
  signInWithEmail: Function;
}>(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [currentUserName, setCurrentUserName] = useState<any>(
    currentUser?.displayName
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  async function signInWithProvider(provider: ProviderType) {
    const result = await SignInWith.Provider(provider);
    setCurrentUserName(result.displayName);
    window.localStorage.setItem("displayName", result.displayName);
  }

  async function signInWithEmail(email: string, password: string) {
    const result = await SignInWith.Email(email, password);
    setCurrentUserName(result.displayName);
    window.localStorage.setItem("displayName", result.displayName);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user!);
      setIsLoading(false);
      const name = window.localStorage.getItem("displayName");
      setCurrentUserName(name);

      if (!user) {
        router.push("/");
        return;
      }
      router.push(`/creator?u=${user.email}`);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentUserName,
    signInWithEmail,
    signInWithProvider,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading ? children : <h3>Loading</h3>}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
