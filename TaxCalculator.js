$(window).on("load", function() {

    console.log( "window loaded" );
    // calculate percentage tax

    /*var salary = Number(document.getElementById('salary').value);
    var bonus = Number(document.getElementById('bonus').value);
    var travelAllowance = Number(document.getElementById('travelAllowance').value);
    var pension = Number(document.getElementById('pension').value);
    var annuity = Number(document.getElementById('annuity').value);*/


    var calculateTax = function(){

        var salary = Number(document.getElementById('salary').value);

        if (salary < 0) {
            return ("Please enter a positve value as salary cannot be negative");
        } else if (salary <= 75750) {
            return ("You are not eligible for taxation");
        } else if (salary <= 189880) {
            return ((salary - 75750) * 18 / 100);
        } else if (salary <= 296540) {
            return ((salary - 189880) * 26 / 100 + 34178 - 13635);
        } else if (salary <= 410460) {
            return (61910 + ((salary - 296540) * 31 / 100));
        } else if (salary <= 555600) {
            return (97225 + ((salary - 410460) * 36 / 100));
        } else if (salary <= 708310) {
            return (149475 + ((salary - 555600) * 39 / 100));
        } else if (salary < 1500000) {
            return (209032 + ((salary - 708310) * 41 / 100));
        } else if (salary > 1500000) {
            return (533625 + ((salary - 1500000) * 45 / 100));
        }
    };

    document.getElementById('calculateTaxButton').addEventListener('click', function(){

        document.getElementById('taxOnBasicResult').innerHTML = calculateTax();

    });

});
