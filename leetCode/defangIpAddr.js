function defangIPaddr(address) {
    const result = []

    for(const char of address){
        if(char === '.'){
            result.push('[.]')
        }else {
            result.push(char)
        }
    }

    return result.join('')
};
console.log(defangIPaddr("1.1.1.1"))
