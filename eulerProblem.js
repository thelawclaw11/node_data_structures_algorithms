function expression(a,b,c,d){
    return (quarted(a) + quarted(b) + quarted(c)) === quarted(d)
}

function findNumber(){
    for(let a = 1n; a <= 500000n; a++){
        for(let b = 1n; b <= 500000n; b++){
            for(let c = 1n; c <= 500000n; c++){
                for(let d = 1n; d <= 500000n; d++){
                    if(expression(a,b,c,d)){
                        return [a,b,c,d]
                    }
                }
            }
        }
    }

}

console.log(findNumber())


function quarted(x){
    return x * x * x * x
}