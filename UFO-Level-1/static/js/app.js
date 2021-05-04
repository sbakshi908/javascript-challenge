// from data.js
var tableData = data;

// YOUR CODE HERE!

//select the button

var enter_date = d3.select(".form-group");
var enter_btn =  d3.select("filter-btn");

//create the function that will run through the form

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    //create a filtered array that contained the UFO sighting on the date the user entered 
    var filter_table = tableData.filter( function (date) {
        if (date.datetime === inputValue.datetime){
            return true;
        }
        else{
            return false;
        }
    })
    console.log(filter_table);

};

//event handlers 
enter_date.on("click", runEnter);
enter_btn.on("submit", runEnter);