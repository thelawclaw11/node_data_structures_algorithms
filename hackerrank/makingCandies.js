function minimumPasses(machinesStartCount, workersStartCount, price, target) {
    const dp = [];

    let day = 0;
    while (dp[day] ? dp[day].unitsSaved : 0 < target) {
        console.log(dp);
        const previousDay = dp[day - 1]
            ? dp[day - 1]
            : { machinesCount: machinesStartCount, workersCount: workersStartCount, unitsSaved: 0 };

        const unitsProducedCurrentDay = previousDay.machinesCount * previousDay.workersCount;
        const withInvestment = invest(unitsProducedCurrentDay, previousDay.machinesCount, previousDay.workersCount);
        const minDaysWithInvestment = minDaysRequired(
            withInvestment.machinesCount,
            withInvestment.workersCount,
            previousDay.unitsSaved,
            target
        );
        const minDaysWithoutInvestment = minDaysRequired(
            previousDay.workersCount,
            previousDay.machinesCount,
            previousDay.unitsSaved + unitsProducedCurrentDay,
            target
        );

        if (minDaysWithInvestment < minDaysWithoutInvestment) {
            dp.push({
                unitsSaved: previousDay.unitsSaved + withInvestment.leftoverUnits,
                machinesCount: withInvestment.machinesCount,
                workersCount: withInvestment.workersCount,
            });
        } else {
            dp.push({
                unitsSaved: previousDay.unitsSaved + unitsProducedCurrentDay,
                machinesCount: previousDay.machinesCount,
                workersCount: previousDay.workersCount,
            });
        }
        day++;
    }
    console.log(dp);
}

console.log(minimumPasses(1, 2, 1, 60));

function minDaysRequired(machinesCount, workersCount, alreadySaved, target) {
    return Math.ceil((target - alreadySaved) / (machinesCount * workersCount));
}

function invest(unitsToInvest, price, machinesCount, workersCount) {
    while (unitsToInvest > 0 && unitsToInvest >= price) {
        if (workersCount < machinesCount) {
            workersCount++;
            unitsToInvest -= price;
        } else {
            machinesCount++;
            unitsToInvest -= price;
        }
    }
    return { machinesCount, workersCount, leftoverUnits: unitsToInvest };
}
