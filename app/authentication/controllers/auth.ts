import {
  AuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import axios from "axios";
import { FirebaseError } from "firebase/app";

export class SignInWith {
  constructor() {}

  public static async Provider(provider: AuthProvider) {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const token = await userCredential.user.getIdToken();
      const result = await authRequest(token);

      return result;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
        throw new Error(error.code);
      }
    }
  }

  public static async Email(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      const result = await authRequest(token);
      return result;
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error.code);
        throw new Error(error.code);
      }
    }
  }
}

export async function SignUpWithEmail({
  displayName,
  email,
  password,
}: {
  displayName: string;
  email: string;
  password: string;
}) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (!userCredential.user.displayName) {
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });
    }
    const token = await userCredential.user.getIdToken();
    const result = await authRequest(token);

    return result;
  } catch (error: unknown) {
    if (error instanceof FirebaseError) {
      console.error(error.code);
      throw new Error(error.code);
    }
  }
}

async function authRequest(token: string) {
  try {
    const result = await axios({
      method: "post",
      url: "http://localhost:5000/user",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(`From server: ${error}`);
  }
}
