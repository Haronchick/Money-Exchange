// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    //H, Q, D, N and P
    //50¢, 25¢, 10¢, 5¢ and 1¢
    let error = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    };
    let coins = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    let result = {
        H: 0,
        Q: 0,
        D: 0,
        N: 0,
        P: 0
    };

    if (currency > 10000) {
       return error;
    } else if (currency === 0) return result = {};

    for (let key in coins) {


        switch (key) {
            case ('H'):
                while (currency >= coins[key]) {
                    result.H++;
                    currency -= coins[key];
                }
                break;
            case ('Q'):
                while (currency >= coins[key]) {
                    result.Q++;
                    currency -= coins[key];
                }
                break;
            case ('D'):
                while (currency >= coins[key]) {
                    result.D++;
                    currency -= coins[key];
                }
                break;
            case('N'):
                while (currency >= coins[key]) {
                    result.N++;
                    currency -= coins[key];
                }
                break;
            case('P'):
                while (currency >= coins[key]) {
                    result.P++;
                    currency -= coins[key];
                }
                break;
        }

    }

    for (let key in result) {
        if (result[key] === 0){
            delete result[key];
        }
    }

    console.log(result);
    return result;
};

