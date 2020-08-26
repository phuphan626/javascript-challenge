// from data.js
var tableData = data;
// Assign the funtion to the 'Filter Table' button
var button = d3.select('#filter-btn');
var form = d3.select('.form-group');
button.on('click', runFilter);
form.on('submit', runFilter);
// button.on('click', runFilter1);
// form.on('submit', runFilter1);


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
    var dateinput = d3.select('#datetime');
    // Get the value from the input
    var inputvalue = dateinput.property('value');
    console.log(inputvalue);
    // var filteredInput = tableData.filter(data => data.datetime === inputvalue);
    // console.log(filteredInput);
    // I saw this one w3school
    // Declare the variables:
    var table, tr, td, i, j, txtValue;
    table = document.getElementById('ufo-table');
    tr = table.getElementsByTagName('tr');
    // Create for loop to check for the input value from user
    for (i = 0; i < tr.length; i++) {
        // Check for datetime in data set, so index is 0
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(inputvalue) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }

    }
}


// var stateinput = d3.select('#state');
// var countryinput = d3.select('#country');
// var shapeinput = d3.select('#shape');
// // Create an eventlistener to filter the table.
// function runFilter1() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
//     // Select the user input location
//     var cityinput = d3.select('#city');
//     // Get the value from the input
//     var inputvalue = cityinput.property('value');
//     console.log(inputvalue);
//     // var filteredInput = tableData.filter(data => data.datetime === inputvalue);
//     // console.log(filteredInput);
//     // I saw this one w3school
//     // Declare the variables:
//     var table, tr, td, i, txtValue;
//     table = document.getElementById('ufo-table');
//     tr = table.getElementsByTagName('tr');
//     // Create for loop to check for the input value from user
//     for (i = 0; i < tr.length; i++) {
//         // Check for datetime in data set, so index is 0
//         td = tr[i].getElementsByTagName('td')[1];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.indexOf(inputvalue) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }

//     }
// }