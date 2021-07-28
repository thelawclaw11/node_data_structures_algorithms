function isSubsequence(subsequence, original) {
    let i = 0;

    for (let j = 0; j < original.length; j++) {
        if (original[j] === subsequence[i]) {
            i++;
        }
    }

    return i === subsequence.length;
}

console.log(isSubsequence("ace", "abcde"));
