import { Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import uuid from 'react-native-uuid';
import RNFetchBlob from 'rn-fetch-blob';

const sasContainerUri = 'https://apsonedegreestorage.blob.core.windows.net';
const container = 'images';
const sasToken =
    'sp=r&st=2022-05-09T07:08:29Z&se=2032-05-09T15:08:29Z&spr=https&sv=2020-08-04&sr=c&sig=XGkhLFkLvjcTlCkC9tKuS6DJ%2BEGzuBY3tONkz1%2BFnIY%3D';

export const UploadImage = async (response) => {
    console.log('rrrrrrrrrrrr', response);
    try {
        var customBlobName = uuid.v4();
        const assetPath = `${sasContainerUri}/${container}?${customBlobName}`;
        return new Promise(async (resolve, reject) => {
            try {
                const sourceUrl =
                    response?.sourceURL || response?.path || response?.uri;
                const localUri =
                    Platform.OS === 'ios'
                        ? sourceUrl.replace('file://', '/')
                        : sourceUrl;
                console.log('////////////', localUri);
                const res = await RNFetchBlob.fetch(
                    'PUT',
                    `${assetPath}?${sasToken}`,
                    {
                        'x-ms-blob-type': 'BlockBlob',
                        'content-type': 'application/octet-stream',
                        'x-ms-blob-content-type': response.type,
                    },
                    RNFetchBlob.wrap(localUri),
                );
                console.log('response is' + JSON.stringify(res?.respInfo));
                // if (res.respInfo.status === 201) {
                resolve({
                    ...res,
                    uploadedUrl: res?.respInfo?.redirects?.[0],
                });
                // }
            } catch (error) {
                console.log(error, 'error');
                showMessage({
                    message: JSON.stringify(error),
                    type: 'danger',
                });
                reject(error);
            }
        });
    } catch (error) {
        console.log('errr', error);
    }
};
