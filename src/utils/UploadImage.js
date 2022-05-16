import { Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import RNFetchBlob from 'rn-fetch-blob';
export const UploadImage = async (response) => {
    const uri = response?.sourceURL || response?.path || response?.uri;
    const mime: string = response?.mime;
    const name: string = response?.filename ?? `image${Date.now()}`;
    return new Promise(async (resolve, reject) => {
        try {
            const sasContainerUri =
                'https://apsonedegreestorage.blob.core.windows.net';
            const customBlobName = Math.random().toString(16).slice(2);
            const container = 'images';
            const sasToken =
                'sp=racwdli&st=2022-05-12T11:46:03Z&se=2032-05-12T19:46:03Z&spr=https&sv=2020-08-04&sr=c&sig=N9%2FPcIOJp1pcQuYmM8UkY6LO9rdmIRCU9RdWiApmIFE%3D'; // you may need to play with other html verbs in this string e.g., `sp`, `ss` e.t.c.
            const assetPath = `${sasContainerUri}/${container}/${customBlobName}${name}`;
            const localUri =
                Platform.OS === 'ios' ? uri.replace('file://', '/') : uri;
            const res = await RNFetchBlob.fetch(
                'PUT',
                `${assetPath}?${sasToken}`,
                {
                    'x-ms-blob-type': 'BlockBlob',
                    'content-type': 'application/octet-stream',
                    'x-ms-blob-content-type': mime || 'image/png',
                },
                RNFetchBlob.wrap(localUri),
            );
            if (res.respInfo.status === 201) {
                resolve({ ...res, uploadedUrl: res?.respInfo?.redirects?.[0] });
            }
        } catch (error) {
            showMessage({
                message: JSON.stringify(error),
                type: 'danger',
            });
            reject(error);
        }
    });
};
