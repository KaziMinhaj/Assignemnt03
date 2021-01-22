// https://github.com/KaziMinhaj/Assignemnt03

// problem 01 : kilometerToMeter

function kilometerToMeter(distance) {
    if (distance < 0) {
        return "Distance can not be negative. Please insert a valid distance."
    }
    else {
        var distanceInMeter = distance * 1000;
        return distanceInMeter;
    }

}
const distance = 5; // distance is 10 kilometer
var result = kilometerToMeter(distance);
// console.log(result);

// problem 02: budgetCalculator

function budgetCalculator(watchAmount, phoneAmount, laptopAmount) {
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    if (watchAmount < 0 || phonePrice < 0 || laptopPrice < 0) {
        return "Item amount can not be negative. Please insert a valid amount."
    }
    else {
        var totalPrice = (watchAmount * watchPrice) + (phoneAmount * phonePrice) + (laptopAmount * laptopPrice);
        return totalPrice;
    }
}
const watchAmount = 2;
const phoneAmount = 4;
const laptopAmount = 6;
var budget = budgetCalculator(watchAmount, phoneAmount, laptopAmount);
// console.log(budget);

// problem 03: hotelCost

function hotelCost(days) {
    if (days < 0) {
        return "Hey! Days can not be negative."
    }
    else if (days <= 10) {
        return days * 100;
    }
    else if (days > 10 && days <= 20) {
        var firstTenDaysCost = 10 * 100;
        var remainingDays = days - 10;
        var remainingDaysCost = remainingDays * 80;
        var totalCost = firstTenDaysCost + remainingDaysCost;
        return totalCost;
    }
    else {
        var costOfFirstTenDays = 10 * 100;
        var secondTenDaysCost = 10 * 80;
        var remaining = days - 20;
        var costOfRemainingDays = remaining * 50;
        var inTotalCost = costOfFirstTenDays + secondTenDaysCost + costOfRemainingDays;
        return inTotalCost;
    }
}

var totalHotelCost = hotelCost(43);
// console.log(totalHotelCost);


// problem 04: megaFriend 

var array = ["kazi", "minhaj", "haider", "shova", "labiba", "Tabassum"];

function megaFriend(arr) {
    if (arr.length <= 0) {
        return "Array is empty. Please provide a valid array!"
    }
    else {
        var max = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i].length > max.length) {
                max = arr[i];
            }
        }
        return max;
    }
}

var largeName = megaFriend(array);
// console.log(largeName);