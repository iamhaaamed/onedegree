import { Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import uuid from 'react-native-uuid';
import RNFetchBlob from 'rn-fetch-blob';

const sasContainerUri = 'https://apsonedegreestorage.blob.core.windows.net';
const container = 'images';
const sasToken =
    'sp=racwdli&st=2022-05-12T11:46:03Z&se=2032-05-12T19:46:03Z&spr=https&sv=2020-08-04&sr=c&sig=N9%2FPcIOJp1pcQuYmM8UkY6LO9rdmIRCU9RdWiApmIFE%3D';

export const UploadImage = async (response) => {
    console.log('rrrrrrrrrrrr', response);
    try {
        // var customBlobName = uuid.v4();
        const assetPath = `${sasContainerUri}/${container}`;
        return new Promise(async (resolve, reject) => {
            try {
                const sourceUrl =
                    response?.sourceURL || response?.path || response?.uri;
                const localUri =
                    Platform.OS === 'ios'
                        ? sourceUrl.replace('file://', '/')
                        : sourceUrl;
                console.log('////////////', response.type);
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
