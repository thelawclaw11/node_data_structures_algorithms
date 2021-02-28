const { karpRabin, isMatch, naive } = require("../karpRabin");

describe("isMatch", () => {
    it("should match", () => {
        expect(isMatch("canon is a happy man", "canon is a happy man")).toBeTruthy();
        expect(isMatch("canon is a happy man", "all crocodiles are mean")).toBeFalsy();
    });
});

it("should find string", () => {
    const document =
        "Text-editing programs frequently need to find all occurrences of a pattern in the" +
        "text. Typically, the text is a document being edited, and the pattern searched for is a" +
        "particular word supplied by the user. Efficient algorithms for this problem—called" +
        "“string matching”—can greatly aid the responsiveness of the text-editing program." +
        "Among their many other applications, string-matching algorithms search for par-" +
        "ticular patterns in DNA sequences. Internet search engines also use them to find" +
        "Web pages relevant to queries.";

    const string = "Among their many other applications,";

    const result = naive(document, string);
    const karpRabinResult = karpRabin(document, string);
    console.log(karpRabinResult);
    expect(result).toEqual(karpRabinResult);
});

describe("karpRabin", () => {
    it("one", () => {});
});
