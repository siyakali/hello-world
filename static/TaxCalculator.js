$(window).on("load", function() {

    console.log("window loaded");

    // Function to store the salary input value
    var getSalary = function(){
        return (Number(document.getElementById('salary').value));
    };

    // Function to store the bonus input value
    var getBonus = function(){
        return (Number(document.getElementById('bonus').value));
    };

    // Function to store the pension input value
    var getPension = function(){
        return (Number(document.getElementById('pension').value));
    };

    // Function to store the annuity input value
    var getAnnuity = function(){
        return (Number(document.getElementById('annuity').value));
    };

    // Function to calculate the net salary.
    // Net salary is minus pension and annuity
    // When bonus is NOT included, add it to salary
    var salaryNet = function(){
        if (document.getElementById('bonusIncludedBox').checked) {
            return (getSalary() - getBonus() - getPension() - getAnnuity());
        } else {
            return (getSalary() - getPension() - getAnnuity());
        }
    };

    // Function to calculate tax on net salary
    var calculateTaxOnSalary = function(){

        console.log("net salary" + salaryNet());

        if (salaryNet() < 0) {
            return ("Please enter a positve value as salary cannot be negative");
        } else if (salaryNet() <= 75750) {
            return ("You are not eligible for taxation");
        } else if (salaryNet() <= 189880) {
            return ((salaryNet() - 75750) * 18 / 100);
        } else if (salaryNet() <= 296540) {
            return ((salaryNet() - 189880) * 26 / 100 + 34178 - 13635);
        } else if (salaryNet() <= 410460) {
            return ((salaryNet() - 296540) * 31 / 100 + 61910 - 13635);
        } else if (salaryNet() <= 555600) {
            return ((salaryNet() - 410460) * 36 / 100 + 97225 - 13635);
        } else if (salaryNet() <= 708310) {
            return ((salaryNet() - 555600) * 39 / 100 + 149475 - 13635);
        } else if (salaryNet() < 1500000) {
            return ((salaryNet() - 708310) * 41 / 100 + 209032 - 13635);
        } else if (salaryNet() > 1500000) {
            return ((salaryNet() - 1500000) * 45 / 100 + 533625 - 13635);
        }

    };

    // Function to calculate tax on net salary WITH BONUS
    var calculateTaxOnSalaryWithBonus = function(){

        var salaryWithBonus = function(){
            return(salaryNet() + getBonus());
        };

        console.log("net salary with bonus" + salaryWithBonus());

        if (salaryWithBonus() < 0) {
            return ("Please enter a positve value as salary cannot be negative");
        } else if (salaryWithBonus() <= 75750) {
            return ("You are not eligible for taxation");
        } else if (salaryWithBonus() <= 189880) {
            return ((salaryWithBonus() - 75750) * 18 / 100);
        } else if (salaryWithBonus() <= 296540) {
            return ((salaryWithBonus() - 188000) * 26 / 100 + 33840 - 13500);
        } else if (salaryWithBonus() <= 410460) {
            return ((salaryWithBonus() - 296540) * 31 / 100 + 61910 - 13635);
        } else if (salaryWithBonus() <= 555600) {
            return ((salaryWithBonus() - 410460) * 36 / 100 + 97225 - 13635);
        } else if (salaryWithBonus() <= 708310) {
            return ((salaryWithBonus() - 555600) * 39 / 100 + 149475 - 13635);
        } else if (salaryWithBonus() < 1500000) {
            return ((salaryWithBonus() - 708310) * 41 / 100 + 209032 - 13635);
        } else if (salaryWithBonus() > 1500000) {
            return ((salaryWithBonus() - 1500000) * 45 / 100 + 533625 - 13635);
        }

    };

    // Function to calculate tax on bonus
    var calculateTaxOnBonus = function(){
        return (calculateTaxOnSalaryWithBonus() - calculateTaxOnSalary());
    };

    // Function to calculate total tax (tax on salary + tax on bonus)
    var calculateTotalTax = function(){
        if (salaryNet() <= 75750) {
            return (calculateTaxOnBonus());
        } else if (salaryNet() > 75750)
            return (calculateTaxOnSalary() + calculateTaxOnBonus());
    };

    var calculateTakeHomePay = function(){
        if (salaryNet() <= 75750) {
            return (salaryNet());
        } else if (salaryNet() > 75750)
            return (salaryNet() + getBonus() - calculateTotalTax());
    };



    document.getElementById('calculateTaxButton').addEventListener('click', function(){

        document.getElementById('totalTaxResult').innerHTML = calculateTotalTax();
        document.getElementById('taxOnBasicResult').innerHTML = calculateTaxOnSalary();
        document.getElementById('taxOnBonusResult').innerHTML = calculateTaxOnBonus();
        document.getElementById('takeHomePayResult').innerHTML = calculateTakeHomePay();

    });



});
