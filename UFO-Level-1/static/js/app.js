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

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    //console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    //create a filtered array that contained the UFO sighting on the date the user entered 
    var filter_table = tableData
    if (inputValue != "") {
        filter_table = filter_table.filter(function (date) {
            if (date.datetime === inputValue) {
                return true;
            }
            else {
                return false;
            }
        })
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
