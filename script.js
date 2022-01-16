function compute()
{
    //function calculates interest for a given principal, rate and term
   if (checkData("principal"))
   {   
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var result = document.getElementById("result");
   
        result.innerHTML = "If you deposit <mark>"+principal+"</mark>, <br/> at an interest rate of <mark>"+rate+"%</mark>,<br/>You will receive an amount of <mark>"+interest+"</mark>,<br/> in the year <mark>"+year+"</mark><br/>";
   }
}

function clearResult()
{
    //added this function to clear output values after one of the input parameters changes
    var result = document.getElementById("result");
    result.innerHTML = "";
}

function updateRate() 
{
    //function updates display value for the rate slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";

    clearResult();
}

function checkData(elementId)
{
    //this function validates that element value is more or equal to 1
    var numtocheck = document.getElementById(elementId).value;

    if (numtocheck <1)
    {
        alert("Please, enter a positive number");
        document.getElementById(elementId).focus();
       return false;
    } 
    return true;
}
        