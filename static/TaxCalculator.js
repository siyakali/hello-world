$(window).on("load", function() {

    console.log( "window loaded" );

    // calculate percentage tax

    /*var salary = Number(document.getElementById('salary').value);

    var travelAllowance = Number(document.getElementById('travelAllowance').value);
    */

    var calculateTaxOnSalary = function(){

        var salary = Number(document.getElementById('salary').value);
        var bonus = Number(document.getElementById('bonus').value);
        var pension = Number(document.getElementById('pension').value);
        var annuity = Number(document.getElementById('annuity').value);

        var salaryNet = (salary + bonus - pension - annuity);

        console.log(salaryNet);

        if (salaryNet < 0) {
            return ("Please enter a positve value as salary cannot be negative");
        } else if (salaryNet <= 75750) {
            return ("You are not eligible for taxation");
        } else if (salaryNet <= 189880) {
            return ((salaryNet - 75750) * 18 / 100);
        } else if (salaryNet <= 296540) {
            return ((salaryNet - 189880) * 26 / 100 + 34178 - 13635);
        } else if (salaryNet <= 410460) {
            return ((salaryNet - 296540) * 31 / 100 + 61910 - 13635);
        } else if (salaryNet <= 555600) {
            return ((salaryNet - 410460) * 36 / 100 + 97225 - 13635);
        } else if (salaryNet <= 708310) {
            return ((salaryNet - 555600) * 39 / 100 + 149475 - 13635);
        } else if (salaryNet < 1500000) {
            return ((salaryNet - 708310) * 41 / 100 + 209032 - 13635);
        } else if (salaryNet > 1500000) {
            return ((salaryNet - 1500000) * 45 / 100 + 533625 - 13635);
        }

    };

    var calculateTaxOnBonus = function(){

        var bonus = Number(document.getElementById('bonus').value);

            return (bonus * 45 / 100);
    };

    /*var calculateTotalTax = function(){
        if (salaryNet <= 75750) {
            return (calculateTaxOnBonus());
        } else if (salaryNet > 75750)
            return (calculateTaxOnSalary() + calculateTaxOnBonus());
    };*/



    document.getElementById('calculateTaxButton').addEventListener('click', function(){



        //document.getElementById('totalTaxResult').innerHTML = calculateTotalTax();
        document.getElementById('taxOnBasicResult').innerHTML = calculateTaxOnSalary();
        document.getElementById('taxOnBonusResult').innerHTML = calculateTaxOnBonus();
        //document.getElementById('takeHomePayResult').innerHTML = calculateTakeHomePay();

    });



});
