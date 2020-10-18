const {inspect} = require('util')
function prettyPrint(x){
    console.log(inspect(x, false, null, true))
}


function whatFlavors(array, target) {
    const table = new Map()

    for(let i = 0; i < array.length; i++){
        table.set(array[i], i)
    }
    //console.log(table)

    for(let i = 0; i < array.length; i++){
        const numToSearch = target - array[i]

        if(table.has(numToSearch) && table.get(numToSearch) !== i){
            //console.log(numToSearch)
            console.log(`${i + 1} ${table.get(numToSearch) + 1}`)
            return
        }
    }
}


console.log(whatFlavors([4,3,2,5,7], 8))

// console.log(whatFlavors([1,4,5,3,2], 4))


// function whatFlavors(array, target) {
//     for(let i = 0; i < array.length; i++){
//         for(let j = i + 1; j < array.length; j++){
//             if(array[i] + array[j] === target){
//                 console.log(`${i + 1} ${j + 1}`)
//             }
//         }
//     }
// }