import {
  AuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/config/firebase";
import axios from "axios";

export class SignInWith {
  constructor() {}

  public static async Provider(provider: AuthProvider) {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const token = await userCredential.user.getIdToken();
      const result = await signInRequest(token, provider.providerId);

      return result;
    } catch (error: any) {
      console.log(`Error: ${error}`);
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
      const result = await signInRequest(token, "cyllo");
      return result;
    } catch (error: any) {
      console.log(error.code);
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
    const result = await signUpRequest(token);

    return result;
  } catch (error) {
    console.log(error);
  }
}

async function signInRequest(token: string, provider: string) {
  try {
    const result = await axios({
      method: "get",
      url: "http://localhost:5000/user",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        provider: provider,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(`From server: ${error}`);
  }
}

async function signUpRequest(token: string) {
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
