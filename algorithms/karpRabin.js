function isMatch(left, right) {
    if (left.length !== right.length) {
        return false;
    }

    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}

function hash(string) {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        result += (string.charCodeAt(i) * Math.pow(256, string.length - i)) % 101;
    }
    return result % 101;
}

function karpRabin(document, string) {
    const targetHash = hash(string);
    for (let i = 0; i < document.length - string.length; i++) {
        const subString = document.substr(i, string.length);
        const subStringHash = hash(subString);
        if (subStringHash === targetHash) {
            if (subString === string) {
                return i;
            }
        }
    }
    return undefined;
}

function naive(document, string) {
    const stringLength = string.length;
    const documentLength = document.length;

    for (let i = 0; i <= documentLength - stringLength; i++) {
        if (document.substr(i, stringLength) === string) {
            return i;
        }
    }
    return undefined;
}

module.exports = { karpRabin, isMatch, naive };
