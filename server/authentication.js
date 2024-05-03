import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";
import { clearSession, setSession } from "@/lib/utils";

export const signinWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const accessToken = result.user.accessToken;
    setSession("uid", accessToken);
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};
export const logout = async (x) => {
  try {
    await signOut(auth).then(() => {
      clearSession("uid");
    });
  } catch (error) {
    console.error("Error signing in with Google:", error);
  }
};
