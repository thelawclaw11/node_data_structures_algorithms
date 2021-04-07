function largestAltitude(gain){
    const altitude = [0];
    for (let i = 0; i < gain.length; i++) {
        altitude.push(altitude[i] + gain[i])
    }
    return Math.max(...altitude)
}

console.log(largestAltitude([-5,1,5,0,-7]))