export const convertFirstCharacterAllWordsToUppercase = (stringToConvert) => {
    if (stringToConvert) {
        const wordsArray = stringToConvert.split(' ');
        const convertedWordsArray = wordsArray.map((word) => {
            return convertFirstCharacterToUppercase(word);
        });

        return convertedWordsArray.join(' ');
    }
};
const convertFirstCharacterToUppercase = (stringToConvert) => {
    var firstCharacter = stringToConvert.substring(0, 1);
    var restString = stringToConvert.substring(1);

    return firstCharacter.toUpperCase() + restString;
};
