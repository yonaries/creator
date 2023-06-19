"use client";

import { AuthProvider as Provider, User } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { SignInWith } from "@/app/(authentication)/controllers/auth";
import { useRouter } from "next/navigation";
import navigation from "next/router";
import Loading from "@/components/loading-page";

const initialState = {
  currentUser: undefined,
  signInWithProvider: () => {},
  signInWithEmail: () => {},
};

const AuthContext = React.createContext<{
  currentUser: User | undefined;
  signInWithProvider: Function;
  signInWithEmail: Function;
}>(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  async function signInWithProvider(provider: Provider) {
    await SignInWith.Provider(provider);
  }

  async function signInWithEmail(email: string, password: string) {
    await SignInWith.Email(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user!);
      setIsLoading(false);

      if (!user && navigation.pathname.includes("creator")) {
        router.push("/");
        return;
      }
      if (!user?.emailVerified) {
        router.push("/verify-email");
        return;
      }
      if (!user) return;
      router.push(`/creator?u=${user?.email}`);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signInWithEmail,
    signInWithProvider,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading ? children : <Loading />}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
