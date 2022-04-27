import auth from '@react-native-firebase/auth';

class FirebaseAuthService {
  signOut = async () => {
    const firebaseAuth = auth();
    if (firebaseAuth.currentUser) {
      await firebaseAuth.signOut();
    }
  };

  signInWithThirdParty = async (
    providerName: 'google' | 'facebook' | 'apple',
    accessToken: string,
    emailAddress?: string,
    nonce?: string,
  ) => {
    const firebaseAuth = auth();
    try {
      let credential;
      if (providerName === 'google') {
        credential = auth.GoogleAuthProvider.credential(accessToken);
      } else if (providerName === 'facebook') {
        credential = auth.FacebookAuthProvider.credential(accessToken);
      } else if (providerName === 'apple') {
        credential = auth.AppleAuthProvider.credential(accessToken, nonce);
      } else {
        throw new Error('This login provider is not supported');
      }
      await firebaseAuth.signInWithCredential(credential);
      const currentUser = firebaseAuth.currentUser;
      const fbIdToken = await currentUser?.getIdToken();

      return {
        idToken: fbIdToken,
        user: currentUser,
      };
    } catch (error) {
      if (error?.code === 'auth/account-exists-with-different-credential') {
        // snackBarService.failed({
        //     duration: 5000,
        //     rtl: false
        // }, "There's already an account with that email address");
        if (emailAddress) {
          try {
            const methods = await firebaseAuth.fetchSignInMethodsForEmail(
              emailAddress,
            );
            // console.log('existing methods: ', methods);
            if (methods && methods.length > 0) {
              // setTimeout(() => {
              //     snackBarService.failed({
              //         duration: 5000,
              //         rtl: false
              //     }, `Please login using ${methods.join(' or ').replace('.com', '')}.`);
              // }, 5500);
            }
          } catch (error2) {}
        }
        return {
          idToken: null,
          user: null,
        };
      } else {
        throw error;
      }
    }
  };
}

const firebaseAuthService = new FirebaseAuthService();
export default firebaseAuthService;
