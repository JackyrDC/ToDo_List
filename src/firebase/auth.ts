import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Gprovider, Auth } from "../../src/firebase/index";

signInWithPopup(Auth, Gprovider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if(credential)
    {
        const token = credential.accessToken;
    }
    const user = result.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });