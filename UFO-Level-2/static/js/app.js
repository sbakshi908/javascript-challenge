// from data.js
var tableData = data;

// YOUR CODE HERE!

//select the button

var enter_date = d3.select(".form-group");
var enter_btn =  d3.select("#filter-btn");

//create the function that will run through the form

//event handlers 
enter_date.on("submit", runEnter);
enter_btn.on("click", runEnter);

//start function 

function runEnter() {
    var filter_table = tableData

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateValue = d3.select("#datetime").property("value");
    var cityValue = d3.select("#city").property("value");
    var stateValue = d3.select("#state").property("value");
    var countryValue = d3.select("#country").property("value");
    var shapeValue =   d3.select("#shape").property("value");


    //filter for date 
    if (dateValue != "") {
        filter_table = filter_table.filter(function (sightings) {
            if (sightings.datetime === dateValue) {
                return true;
            }
            else {
                return false;
            }
        })
        console.log(filter_table);
    };
    /// filter for city 
    if (cityValue != "") {
        filter_table = filter_table.filter(sightings => sightings.city === cityValue); 

        console.log(filter_table);
    };

     /// filter for state 
     if (stateValue != "") {
        filter_table = filter_table.filter(sightings => sightings.state === stateValue); 

        console.log(filter_table);
    };

    /// filter for country 
    if (countryValue != "") {
        filter_table = filter_table.filter(sightings => sightings.country === countryValue); 

        console.log(filter_table);
    };

    /// filter for shape 
    if (shapeValue != "") {
        filter_table = filter_table.filter(sightings => sightings.shape === shapeValue); 

        console.log(filter_table);
    };

    var tbody = d3.select("tbody");
    // delete any pre-exisiting elements in the table body
    tbody.html("")

    filter_table.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    }); 

};
////////////Run this when page loads to show all the data before adding filter 

var tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
}); 
