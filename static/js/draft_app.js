// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log (print) the UFO sighting data from data.js
// console.log(tableData);

// Loop through 'tableData' and console.log each object
// and append tr elements in tbody for rows to hold object keys and values
// tableData.forEach(function(element) {
//     console.log(element);
//     var row = tbody.append("tr");
//   });


// Use "Object.entries" to console.log each sighting record
// tableData.forEach(function(element) {
//     console.log(element);
//     var row = tbody.append("tr");

//     Object.entries(element).forEach(function([key, value]) {
//         console.log(key, value);
//     });
//   });

// Use d3 to append 1 cell per sighting 
// tableData.forEach(function(element) {
//     console.log(element);
//     var row = tbody.append("tr");

//     Object.entries(element).forEach(function([key, value]) {
//         console.log(key, value);

//         var cell = tbody.append("td");

//     });
//   });

// Use d3 to update each cell's text/values with sighting data 
// tableData.forEach(function(element) {
//     console.log(element);
//     var row = tbody.append("tr");

//     Object.entries(element).forEach(function([key, value]) {
//         console.log(key, value);

//         var cell = tbody.append("td");
//         cell.text(value);
//     });
//   });


// refactor to use arrow functions
tableData.forEach((element) => {
    var row = tbody.append("tr");

    Object.entries(element).forEach(function([key, value]) {
        console.log(key, value);

        var cell = tbody.append("td");
        cell.text(value);
    });
  });



// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(element => element.datetime === inputValue);

  console.log(filteredData);

//   // BONUS: Calculate summary statistics for the age field of the filtered data

//   // First, create an array with just the age values
//   var ages = filteredData.map(person => person.age);

//   // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

//   // Then, select the unordered list element by class name
//   var list = d3.select(".summary");

//   // remove any children from the list to
//   list.html("");

//   // append stats to the list
//   list.append("li").text(`Mean: ${mean}`);
//   list.append("li").text(`Median: ${median}`);
//   list.append("li").text(`Mode: ${mode}`);
//   list.append("li").text(`Variance: ${variance}`);
//   list.append("li").text(`Standard Deviation: ${standardDeviation}`);
// });
