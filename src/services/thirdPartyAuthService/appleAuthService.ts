import appleAuth, {
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication';
import {Platform} from 'react-native';
import Config from 'react-native-config';

class AppleAuthService {
  signIn = async () => {
    let nonce;
    let idToken;
    let fullResult;

    if (Platform.OS === 'ios') {
      // Start the sign-in request
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      // Ensure Apple returned a user identityToken
      if (!appleAuthRequestResponse.identityToken) {
        throw new Error('Apple Sign-In failed - no identify token returned');
      }

      // Create a Firebase credential from the response
      fullResult = appleAuthRequestResponse;
      idToken = appleAuthRequestResponse.identityToken;
      nonce = appleAuthRequestResponse.nonce;
    } else if (Platform.OS === 'android') {
      try {
        // Initialize the module
        appleAuthAndroid.configure({
          // The Service ID you registered with Apple
          clientId: Config.APPLE_SERVICE_ID,

          // Return URL added to your Apple dev console. We intercept this redirect, but it must still match
          // the URL you provided to Apple. It can be an empty route on your backend as it's never called.
          redirectUri: Config.APPLE_RETURN_URL,

          // [OPTIONAL]
          // Scope.ALL (DEFAULT) = 'email name'
          // Scope.Email = 'email';
          // Scope.Name = 'name';
          scope: appleAuthAndroid.Scope.ALL,

          // [OPTIONAL]
          // ResponseType.ALL (DEFAULT) = 'code id_token';
          // ResponseType.CODE = 'code';
          // ResponseType.ID_TOKEN = 'id_token';
          responseType: appleAuthAndroid.ResponseType.ALL,
        });

        const response = await appleAuthAndroid.signIn();
        fullResult = response;

        if (response) {
          nonce = response.nonce;
          const code = response.code; // Present if selected ResponseType.ALL / ResponseType.CODE
          idToken = response.id_token; // Present if selected ResponseType.ALL / ResponseType.ID_TOKEN
          const user = response.user; // Present when user first logs in using appleId
          const state = response.state; // A copy of the state value that was passed to the initial request.
          console.log('Got auth code', code);
          console.log('Got id_token', idToken);
          console.log('Got user', user);
          console.log('Got state', state);
        }
        return {accessToken: idToken, fullResult, nonce};
      } catch (error) {
        if (error && error.message) {
          switch (error.message) {
            case appleAuthAndroid.Error.NOT_CONFIGURED:
              console.log('appleAuthAndroid not configured yet.');
              break;
            case appleAuthAndroid.Error.SIGNIN_FAILED:
              console.log('Apple signin failed.');
              break;
            case appleAuthAndroid.Error.SIGNIN_CANCELLED:
              console.log('User cancelled Apple signin.');
              break;
            default:
              break;
          }
        }
      }
    }

    return {accessToken: idToken, fullResult, nonce};
  };
}

const appleAuthService = new AppleAuthService();
export default appleAuthService;
