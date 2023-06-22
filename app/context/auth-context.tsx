"use client";

import { AuthProvider as Provider, User } from "firebase/auth";
import React, { use, useContext, useEffect, useState } from "react";
import { auth } from "@/config/firebase";
import { SignInWith } from "@/app/(authentication)/controllers/auth";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading-page";
import { fetchUserPage } from "./get-user-page.action";
import { usePathname } from "next/navigation";

const initialState = {
  currentUser: undefined,
  currentUserPage: undefined,
  idToken: undefined,
  signInWithProvider: () => {},
  signInWithEmail: () => {},
};
type Page = {
  [key: string]: any;
};
export const AuthContext = React.createContext<{
  currentUser: User | undefined;
  currentUserPage: Page | undefined;
  idToken: string | undefined;
  signInWithProvider: Function;
  signInWithEmail: Function;
}>(initialState);

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [currentUserPage, setCurrentUserPage] = useState<Page>();
  const [idToken, setIdToken] = useState<string>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();

  async function signInWithProvider(provider: Provider) {
    await SignInWith.Provider(provider);
  }

  async function signInWithEmail(email: string, password: string) {
    await SignInWith.Email(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user!);
      setIsLoading(false);

      user?.getIdToken().then((token) => {
        setIdToken(token);
      });

      const page = await fetchUserPage(user?.uid!);
      if (page) setCurrentUserPage(page.page);

      if (pathname.includes("donate")) return;

      if (!user) {
        router.push("/signup");
        return;
      }
      if (user && !user?.emailVerified) {
        router.push("/verify-email");
        return;
      }
      if (user?.emailVerified && !page && pathname.includes("creator")) {
        router.push("/account");
        return;
      }
      if (
        user &&
        page &&
        user?.emailVerified &&
        (pathname.includes("creator") || pathname.includes("account"))
      )
        return;

      router.push(`/account`);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    currentUserPage,
    idToken,
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
