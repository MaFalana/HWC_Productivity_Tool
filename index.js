/**************************************
TITLE: index.js							
AUTHOR: Malik Falana (MF)			
CREATE DATE: 12/14/2024	
PURPOSE: To use jquery and functions for portfolio page
LAST MODIFIED ON: 12/15/2024	
LAST MODIFIED BY: Malik Falana (MF)
MODIFICATION HISTORY:
12/14/2024: Original Build
***************************************/


$(document).ready(function() 
{
   
    function convertToDecimalDegrees() // Convert to Decimal Degrees
    {
        convertLat() // Step 1

        convertLon() // Step 2

        convertZ() // Step 3
    }

    
    function convertLat() // Convert Latitude
    {
        var DD = 0.0; // Decimal Degrees

        var D = $("#degrees").val(); // Degrees

        var M = $("#minutes").val(); // Minutes

        var S = $("#seconds").val(); // Seconds

        DD = parseInt(D) + (M/60) + (S/3600); // Decimal degrees = Degrees + Minutes/60 + Seconds/3600

        $("#out-latitude").text(`${DD}°`);

    }

    function convertLon()// Convert Longitude
    {
        var DD = 0.0; // Decimal Degrees

        var D = $("#degrees2").val(); // Degrees

        var M = $("#minutes2").val(); // Minutes

        var S = $("#seconds2").val(); // Seconds

        DD = parseInt(D) + (M/60) + (S/3600); // Decimal degrees = Degrees + Minutes/60 + Seconds/3600

        $("#out-longitude").text(`${DD}°`);
    }

    function convertZ() // Convert Z
    {
        const elevConstant = 3.280833333; // 

        var calculatedElevation = $("input#elevation").val() / elevConstant;

        //console.log(`The calculated elevation is ${calculatedElevation}`);

        $("#out-elevation").text(calculatedElevation);
    }

    $("input").change(convertToDecimalDegrees)


});  // end of $(document).ready()