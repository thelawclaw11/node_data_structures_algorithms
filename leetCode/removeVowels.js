function removeVowels(s) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);

    return s
        .split("")
        .filter((char) => !vowels.has(char))
        .join("");
}

console.log(removeVowels("canon"));
