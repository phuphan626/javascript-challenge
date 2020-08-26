// from data.js
var tableData = data;

// YOUR CODE HERE!
// // Declare all the arrays to hold values
// var datetime = [];
// var city = [];
// var state = [];
// var country = [];
// var shape = [];
// var durationMinutes = [];
// var comments = [];

// // Get the data by looping throught the data.js

// tableData.forEach((data) => {
//     Object.entries(data).forEach(([key, value]) => {
//         if (key === 'datetime') {
//             datetime.push(value);
//         } else if (key === 'city') {
//             city.push(value);
//         } else if (key === 'state') {
//             state.push(value);
//         } else if (key === 'country') {
//             country.push(value);
//         } else if (key === 'shape') {
//             shape.push(value);
//         } else if (key === 'durationMinutes') {
//             durationMinutes.push(value);
//         } else { comments.push(value); }
//     });
// });

// Using map functon to make the code shorter
// var datetime = tableData.map(data => data.datetime);
// var city = tableData.map(data => data.city);
// var state = tableData.map(data => data.state);
// var country = tableData.map(data => data.country);
// var shape = tableData.map(data => data.shape);
// var durationMinutes = tableData.map(data => data.durationMinutes);
// var comments = tableData.map(data => data.comments);

// Select the tbody
var tbody = d3.select('tbody');
// Using forEach loop to add new data to the table
tableData.forEach((data) => {
    var row = tbody.append('tr');
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append('td');
        cell.text(value);
    });
});
// Create an eventlistener to filter the table.
function runFilter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the user input location
    var userinput = d3.select('#datetime');
    // Get the value from the input
    var inputvalue = userinput.property('value');
    console.log(inputvalue);
    // var filteredInput = tableData.filter(data => data.datetime === inputvalue);
    // console.log(filteredInput);
    // I saw this one w3school
    // Declare the variables:
    var table, tr, td, i, txtValue;
    table = document.getElementById('ufo-table');
    tr = table.getElementsByTagName('tr');
    // Create for loop to check for the input value from user
    for (i = 0; i < tr.length; i++) {
        // Check for datetime in data set, so index is 0
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            // Check to see if the inputvalue in the table, using the indexOF. 
            // If the inputvalue is not in the table, the index would be -1
            if (txtValue.indexOf(inputvalue) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }
}

// Assign the funtion to the 'Filter Table' button
var button = d3.select('#filter-btn');
var form = d3.select('.form-group');
button.on('click', runFilter);
form.on('submit', runFilter);