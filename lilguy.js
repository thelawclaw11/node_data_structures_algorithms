const withErrorHandling = (func) => {
    try {
        return (args) => func();
    } catch (e) {
        console.log(e);
        return null;
    }
};
