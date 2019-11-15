// from data.js
var tableData = data;

var tbody = d3.select("tbody");

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

  
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);

        var cell = tbody.append("td");
        cell.text(value);
    });
  });
});


