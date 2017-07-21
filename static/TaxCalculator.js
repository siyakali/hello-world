$(window).on("load", function() {

    console.log("window loaded");

    document.getElementById('under65Box').checked = true;
    document.getElementById('salary').defaultValue = 50000;
    document.getElementById('bonus').defaultValue = 100;
    document.getElementById('travelRebate').defaultValue = 0;
    document.getElementById('pension').defaultValue = 500;
    document.getElementById('annuity').defaultValue = 0;

    // Function to return the retired status
    var getRetiredStatus = function(){

        if (document.getElementById('between65and75Box').checked) {
            return "semiretired";
        } else if (document.getElementById('over75Box').checked) {
            return "retired";
        }

        return "unretired";

    };

    // Function to store the salary input value
    var getSalary = function(){
        return Number(document.getElementById('salary').value);
    };

    // Function to store the bonus input value
    var getBonus = function(){
        return Number(document.getElementById('bonus').value);
    };

    // Function to store the travel rebate input value
    var getTravelRebate = function(){
        return Number(document.getElementById('travelRebate').value);
    };

    // Function to store the pension input value
    var getPension = function(){
        return Number(document.getElementById('pension').value);
    };

    // Function to store the annuity input value
    var getAnnuity = function(){
        return Number(document.getElementById('annuity').value);
    };

    // Function to calculate the net salary.
    // Net salary is minus pension and annuity
    // When bonus is NOT included, add it to salary
    var salaryNet = function(){
        if (document.getElementById('bonusIncludedBox').checked) {
            return getSalary() - getBonus() - getPension() - getAnnuity();
        }
        return getSalary() - getPension() - getAnnuity();
    };

    var salaryWithBonus = function(){
        return salaryNet() + getBonus();
    };

    // Function to calculate tax on net salary
    var calculateTaxOnSalary = function(){

        console.log("net salary = " + salaryNet());

        if (getRetiredStatus() === "semiretired") {
            console.log("ageBetween65and75");

            var net = salaryNet();

            if (net < 0) {
                return "Please enter a positve value as salary cannot be negative";
            } else if (net <= 117300) {
                return 0;
            } else if (net <= 189880) {
                return (net - 117300) * 18 / 100;
            } else if (net <= 296540) {
                return (net - 189880) * 26 / 100 + 34178 - 21114;
            } else if (net <= 410460) {
                return (net - 296540) * 31 / 100 + 61910 - 21114;
            } else if (net <= 555600) {
                return (net - 410460) * 36 / 100 + 97225 - 21114;
            } else if (net <= 708310) {
                return (net - 555600) * 39 / 100 + 149475 - 21114;
            } else if (net < 1500000) {
                return (net - 708310) * 41 / 100 + 209032 - 21114;
            } else if (net > 1500000) {
                return (net - 1500000) * 45 / 100 + 533625 - 21114;
            }

        } else if (getRetiredStatus() === "retired") {

            console.log("ageOver75");

            var net = salaryNet();

            if (net < 0) {
                return "Please enter a positve value as salary cannot be negative";
            } else if (net <= 131150) {
                return 0;
            } else if (net <= 189880) {
                return (net - 131150) * 18 / 100;
            } else if (net <= 296540) {
                return (net - 189880) * 26 / 100 + 34178 - 23607;
            } else if (net <= 410460) {
                return (net - 296540) * 31 / 100 + 61910 - 23607;
            } else if (net <= 555600) {
                return (net - 410460) * 36 / 100 + 97225 - 23607;
            } else if (net <= 708310) {
                return (net - 555600) * 39 / 100 + 149475 - 23607;
            } else if (net < 1500000) {
                return (net - 708310) * 41 / 100 + 209032 - 23607;
            } else if (net > 1500000) {
                return (net - 1500000) * 45 / 100 + 533625 - 23607;
            }

        } else {

            console.log ("under65")

            var net = salaryNet();

            if (net < 0) {
                return "Please enter a positve value as salary cannot be negative";
            } else if (net <= 75750) {
                return 0;
            } else if (net <= 189880) {
                return (net - 75750) * 18 / 100;
            } else if (net <= 296540) {
                return (net - 189880) * 26 / 100 + 34178 - 13635;
            } else if (net <= 410460) {
                return (net - 296540) * 31 / 100 + 61910 - 13635;
            } else if (net <= 555600) {
                return (net - 410460) * 36 / 100 + 97225 - 13635;
            } else if (net <= 708310) {
                return (net - 555600) * 39 / 100 + 149475 - 13635;
            } else if (net < 1500000) {
                return (net - 708310) * 41 / 100 + 209032 - 13635;
            } else if (net > 1500000) {
                return (net - 1500000) * 45 / 100 + 533625 - 13635;
            }

        }

    };

    // Function to calculate tax on net salary WITH BONUS
    var calculateTaxOnSalaryWithBonus = function(){

        console.log("net salary with bonus = " + salaryWithBonus());

        if (getRetiredStatus() === "semiretired") {
            console.log("ageBetween65and75");

            var salaryBonus = salaryWithBonus();

            if (salaryBonus < 0) {
                return "Please enter a positve value as salary cannot be negative";
            } else if (salaryBonus <= 117300) {
                return 0;
            } else if (salaryBonus <= 189880) {
                return (salaryBonus - 117300) * 18 / 100;
            } else if (salaryBonus <= 296540) {
                return (salaryBonus - 189880) * 26 / 100 + 34178 - 21114;
            } else if (salaryBonus <= 410460) {
                return (salaryBonus - 296540) * 31 / 100 + 61910 - 21114;
            } else if (salaryBonus <= 555600) {
                return (salaryBonus - 410460) * 36 / 100 + 97225 - 21114;
            } else if (salaryBonus <= 708310) {
                return (salaryBonus - 555600) * 39 / 100 + 149475 - 21114;
            } else if (salaryBonus < 1500000) {
                return (salaryBonus - 708310) * 41 / 100 + 209032 - 21114;
            } else if (salaryBonus > 1500000) {
                return (salaryBonus - 1500000) * 45 / 100 + 533625 - 21114;
            }

        } else if (getRetiredStatus() === "retired") {

            console.log("ageOver75");

            var salaryBonus = salaryWithBonus();

            if (salaryBonus < 0) {
                return "Please enter a positve value as salary cannot be negative";
            } else if (salaryBonus <= 131150) {
                return 0;
            } else if (salaryBonus <= 189880) {
                return (salaryBonus - 131150) * 18 / 100;
            } else if (salaryBonus <= 296540) {
                return (salaryBonus - 189880) * 26 / 100 + 34178 - 23607;
            } else if (salaryBonus <= 410460) {
                return (salaryBonus - 296540) * 31 / 100 + 61910 - 23607;
            } else if (salaryBonus <= 555600) {
                return (salaryBonus - 410460) * 36 / 100 + 97225 - 23607;
            } else if (salaryBonus <= 708310) {
                return (salaryBonus - 555600) * 39 / 100 + 149475 - 23607;
            } else if (salaryBonus < 1500000) {
                return (salaryBonus - 708310) * 41 / 100 + 209032 - 23607;
            } else if (salaryBonus > 1500000) {
                return (salaryBonus - 1500000) * 45 / 100 + 533625 - 23607;
            }

        } else {

            console.log ("under65")

            var salaryBonus = salaryWithBonus();

            if (salaryBonus < 0) {
                return "Please enter a positve value as salary cannot be negative";
            } else if (salaryBonus <= 75750) {
                return 0;
            } else if (salaryBonus <= 189880) {
                return (salaryBonus - 75750) * 18 / 100;
            } else if (salaryBonus <= 296540) {
                return (salaryBonus - 189880) * 26 / 100 + 34178 - 13635;
            } else if (salaryBonus <= 410460) {
                return (salaryBonus - 296540) * 31 / 100 + 61910 - 13635;
            } else if (salaryBonus <= 555600) {
                return (salaryBonus - 410460) * 36 / 100 + 97225 - 13635;
            } else if (salaryBonus <= 708310) {
                return (salaryBonus - 555600) * 39 / 100 + 149475 - 13635;
            } else if (salaryBonus < 1500000) {
                return (salaryBonus - 708310) * 41 / 100 + 209032 - 13635;
            } else if (salaryBonus > 1500000) {
                return (salaryBonus - 1500000) * 45 / 100 + 533625 - 13635;
            }

        }

    };

    // Function to calculate tax on bonus
    var calculateTaxOnBonus = function(){

        console.log("tax on salary with bonus = " + calculateTaxOnSalaryWithBonus());

        return calculateTaxOnSalaryWithBonus() - calculateTaxOnSalary();
    };

    // Function to calculate total tax (tax on salary + tax on bonus)
    var calculateTotalTax = function(){

        if (getBonus() === 0 && getTravelRebate() === 0) {
            return calculateTaxOnSalary();
        } else if (getBonus() === 0) {
            return calculateTaxOnSalary() - getTravelRebate();
        } else if (getTravelRebate() === 0) {
            return calculateTaxOnSalary() + calculateTaxOnBonus();
        }

        return calculateTaxOnSalary() + calculateTaxOnBonus() - getTravelRebate();

    };

    // Function to calculate take home pay
    var calculateTakeHomePay = function(){

        return salaryNet() + getBonus() - calculateTotalTax();

    };

    document.getElementById('calculateTaxButton').addEventListener('click', function(){

        document.getElementById('totalTaxResult').innerHTML = "R " + calculateTotalTax();
        document.getElementById('taxOnBasicResult').innerHTML = "R " + calculateTaxOnSalary();
        document.getElementById('taxOnBonusResult').innerHTML = "R " + calculateTaxOnBonus();
        document.getElementById('takeHomePayResult').innerHTML = "R " + calculateTakeHomePay();

    });

});
