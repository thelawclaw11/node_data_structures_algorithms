function intersection(left, right){
    const leftElements = new Set(left)
    const out = new Set()

    for(const num of right){
        if(leftElements.has(num)){
            out.add(num)
        }
    }
    return Array.from(out)
}

function union(left, right){
    const out = new Set()

    for(const num of left){
        out.add(num)
    }

    for(const num of right){
        out.add(num)
    }
    return Array.from(out)
}

function isSubset(sub, power){
    const powerSet = new Set(power)

    for(const num of sub){
        if(!powerSet.has(num)){
            return false
        }
    }
    return true
}





it('set function', () => {
    expect(intersection([1,2,3,4,5], [3,4,5,6, 7])).toEqual([3,4,5])
    expect(union([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6])

    expect(isSubset([5,6,7], [1,2,3,4,5,6,7,8,9])).toEqual(true)
    expect(isSubset([5,6,7], [1,2,3,4,5,6,8,9])).toEqual(false)



})