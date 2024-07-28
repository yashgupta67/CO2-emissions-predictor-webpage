function onClickedEstimateCO2Emissions() {
    console.log("Estimate CO2 Emissions button clicked");
    var engineSize = document.getElementById("uiEngineSize").value;
    var cylinders = document.getElementById("uiCylinders").value;
    var fuelConsumptionCity = document.getElementById("uiFuelConsumptionCity").value;
    var fuelConsumptionHwy = document.getElementById("uiFuelConsumptionHwy").value;
    var fuelConsumptionCombMPG = document.getElementById("uiFuelConsumptionCombMPG").value;
    var estCO2Emissions = document.getElementById("uiEstimatedCO2Emissions");

    var url = "/api/predict_co2_emissions"; 

    $.post(url, {
        engine_size: parseFloat(engineSize),
        cylinders: parseInt(cylinders),
        fuel_consumption_city: parseFloat(fuelConsumptionCity),
        fuel_consumption_hwy: parseFloat(fuelConsumptionHwy),
        fuel_consumption_comb_mpg: parseFloat(fuelConsumptionCombMPG)
    }, function(data, status) {
        console.log(data.estimated_co2_emissions);
        estCO2Emissions.innerHTML = "<h2>" + data.estimated_co2_emissions.toString() + " g/km</h2>";
        console.log(status);
    });
}

function onPageLoad() {
    console.log("document loaded");
}

window.onload = onPageLoad;
