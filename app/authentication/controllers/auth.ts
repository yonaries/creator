import {
  AuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
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

export async function SignUpWithEmail(
  email: string,
  password: string,
  name: string
) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const token = await userCredential.user.getIdToken();
    const result = await signUpRequest(token, name);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function signInRequest(token: string, provider: string) {
  try {
    const result = await axios({
      method: "get",
      url: "http://localhost:5000/api/user/signin",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
        provider: provider,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(`From server: ${error}`);
  }
}

async function signUpRequest(token: string, name: string) {
  try {
    const result = await axios({
      method: "post",
      url: "http://localhost:5000/api/user/signup",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      data: {
        displayName: name,
      },
    });
    return result.data;
  } catch (error) {
    throw new Error(`From server: ${error}`);
  }
}
