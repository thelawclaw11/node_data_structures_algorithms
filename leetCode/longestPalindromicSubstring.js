function longestPalindrome(s) {
    let maxSubstringLength = 0;

    let pivot = 0;
    let i = 0;

    let l = 0;
    let r = 0;

    while (pivot < s.length && i < s.length) {
        if (s[i] === s[pivot - (i - pivot)]) {
            const substringLength = (i - pivot) * 2 + 1;
            if (substringLength > maxSubstringLength) {
                maxSubstringLength = substringLength;
                l = pivot - (i - pivot);
                r = i;
            }
            i++;
        } else {
            pivot += 0.5;
            i = Math.floor(pivot + 1);
        }
    }

    return s.substring(l, r + 1);
}

console.log("baddad".substring(0, 1));

//console.log(longestPalindrome("baddad"));
console.log(longestPalindrome("cbbd"));
