/* eslint-disable */
import type { User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const loginGoogle = async (): Promise<User | null> => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("deu boa", auth.currentUser);
    return user;
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log("deu ruim", errorCode, errorMessage, credential, email);
    return null;
  }
};

const logout = async () => {
  await signOut(auth);
  console.log("deslogou tranquilo", auth.currentUser);
};
export { loginGoogle, logout };
