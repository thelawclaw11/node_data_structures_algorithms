function reverseVowels(s) {
    const vowels = new Set(["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]);

    const chars = s.split("");

    const foundVowels = [];

    for (let i = 0; i < chars.length; i++) {
        if (vowels.has(chars[i])) {
            foundVowels.push(chars[i]);
            chars[i] = null;
        }
    }

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === null) {
            chars[i] = foundVowels.pop();
        }
    }

    return chars.join("");
}

console.log(reverseVowels("hello"));
