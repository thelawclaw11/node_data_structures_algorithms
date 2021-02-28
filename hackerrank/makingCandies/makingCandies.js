function invest(unitsToInvest, price, machinesCount, workersCount) {
    if (workersCount < machinesCount && machinesCount - workersCount > 1) {
        const difference = machinesCount - workersCount;
        const differencePrice = difference * price;
        const differenceThatCanBePaid = Math.min(unitsToInvest, differencePrice);
        const workersThatCanBePurchased = Math.floor(differenceThatCanBePaid / price);

        workersCount += workersThatCanBePurchased;
        unitsToInvest -= workersThatCanBePurchased * price;
    }

    if (machinesCount < workersCount && workersCount - machinesCount > 1) {
        const difference = workersCount - machinesCount;

        const costToBalanceThatCanBePaid = Math.min(unitsToInvest, difference * price);
        const machinesThatCanBePurchased = Math.floor(costToBalanceThatCanBePaid / price);

        machinesCount += machinesThatCanBePurchased;
        unitsToInvest -= machinesThatCanBePurchased * price;
    }

    if (unitsToInvest >= price) {
        const numberOfAssetsToBuy = Math.floor(unitsToInvest / price);
        //console.log(numberOfAssetsToBuy);
        const costOfAssets = numberOfAssetsToBuy * price;

        unitsToInvest -= costOfAssets;

        if (numberOfAssetsToBuy % 2 === 0) {
            const numberOfAssetsForEach = numberOfAssetsToBuy / 2;
            machinesCount += numberOfAssetsForEach;
            workersCount += numberOfAssetsForEach;
        } else {
            const numberOfAssetsForEach = Math.floor(numberOfAssetsToBuy / 2);
            const leftoverAsset = 1;
            machinesCount += numberOfAssetsForEach;
            workersCount += numberOfAssetsForEach;

            if (workersCount < machinesCount) {
                workersCount += leftoverAsset;
            } else {
                machinesCount += leftoverAsset;
            }
        }
    }
    return { machinesCount, workersCount, leftoverUnits: unitsToInvest };
}

function minDaysRequired(dailyProduction, unitsSaved, target) {
    return Math.ceil((target - unitsSaved) / dailyProduction);
}

function minimumPasses(machinesStartCount, workersStartCount, price, target) {
    const log = [];
    let previousDay = {
        machinesCount: machinesStartCount,
        workersCount: workersStartCount,
        unitsSaved: 0,
    };

    let day = 0;
    while (previousDay.unitsSaved < target) {
        const producedToday = previousDay.machinesCount * previousDay.workersCount;

        const totalUnitsSaved = producedToday + previousDay.unitsSaved;

        if (false === true && totalUnitsSaved < price) {
            // const additionalUnitsNeeded = price - totalUnitsSaved;
            //
            // const daysToEarnEnough = Math.ceil(additionalUnitsNeeded / producedToday);
            // //console.log(daysToEarnEnough);
            //
            // day += daysToEarnEnough;
            // //console.log(day);
            //
            // console.log({ additionalUnitsNeeded, daysToEarnEnough, day });
            //
            // previousDay = {
            //     unitsSaved: daysToEarnEnough * producedToday + totalUnitsSaved,
            //     machinesCount: previousDay.machinesCount,
            //     workersCount: previousDay.workersCount,
            // };
        } else {
            day++;
            const producedToday = previousDay.machinesCount * previousDay.workersCount;

            const totalUnitsSaved = producedToday + previousDay.unitsSaved;

            const withInvestment = invest(totalUnitsSaved, price, previousDay.machinesCount, previousDay.workersCount);

            //console.log("day: ", day, withInvestment);

            const withInvestmentProduction = withInvestment.workersCount * withInvestment.machinesCount;

            const minDaysWithInvestment = minDaysRequired(
                withInvestmentProduction,
                withInvestment.leftoverUnits,
                target
            );

            const withoutInvestmentProduction = previousDay.workersCount * previousDay.machinesCount;
            const minDaysWithoutInvestment = minDaysRequired(withoutInvestmentProduction, totalUnitsSaved, target);

            if (minDaysWithInvestment < minDaysWithoutInvestment) {
                log.push({
                    ...previousDay,
                    day,
                    producedToday,
                    totalUnitsSaved,
                    decision: "invest",
                    minDaysWithInvestment,
                    minDaysWithoutInvestment,
                });
                //console.log("invest");
                previousDay = {
                    unitsSaved: withInvestment.leftoverUnits,
                    machinesCount: withInvestment.machinesCount,
                    workersCount: withInvestment.workersCount,
                };
            } else {
                log.push({
                    ...previousDay,
                    day,
                    producedToday,
                    totalUnitsSaved,
                    decision: "save",
                    minDaysWithInvestment,
                    minDaysWithoutInvestment,
                });
                previousDay = {
                    unitsSaved: totalUnitsSaved,
                    machinesCount: previousDay.machinesCount,
                    workersCount: previousDay.workersCount,
                };
            }
        }
    }
    console.table(log);
    return day;
}

module.exports = { invest, minimumPasses, minDaysRequired };
