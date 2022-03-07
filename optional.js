const me = {
    age: 21,
    name: "Canon Law",
    birth: {
        location: {
            city: "Orem",
            state: "Utah",
        },
    },
    hasSex: {
        isGood: false
    }
};

console.log(me?.hasSex?.isGood ?? 0)