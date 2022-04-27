import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

class GoogleAuthService {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const gidResult = await GoogleSignin.signIn();
      const {idToken} = gidResult;
      return {accessToken: idToken, fullResult: gidResult};
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        throw new Error('Cancelled by user');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        throw new Error('Already signin in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        throw new Error('Google play services not available');
      } else {
        throw error;
      }
    }
  };
}

const googleAuthService = new GoogleAuthService();
export default googleAuthService;
